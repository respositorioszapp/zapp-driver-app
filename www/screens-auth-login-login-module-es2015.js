(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/login/login.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/login/login.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"warning\" class=\"ion-padding\">\n  <div class=\"ion-text-center margin-top-15vh ion-padding-bottom\">\n    <img src=\"assets/imgs/logo-morado.png\" width=\"180\">\n  </div>\n  <ion-card class=\"border-radius\">\n    <ion-card-content>\n      <form  [formGroup]=\"loginData\" (submit)=\"send()\" novalidate>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-icon name=\"person-circle\" slot=\"start\"></ion-icon>\n          <ion-input placeholder=\"Email\" formControlName=\"email\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.email.dirty && controls.email.touched && controls.email.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.email.errors.required\">Email es requerido</ion-label>\n          <ion-label *ngIf=\"controls.email.errors.email\">Debe ser un email válido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top ion-margin-bottom\">\n          <ion-icon name=\"lock-closed\" slot=\"start\"  ></ion-icon>\n          <ion-input [type]=\"view ?'text': 'password'\" placeholder=\"Password\" formControlName=\"password\" required ></ion-input>\n          <ion-icon [name]=\"view ? 'eye-outline': 'eye-off-outline'\" slot=\"end\" (click)=\"setView()\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.password.dirty && controls.password.touched && controls.password.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\" ></ion-icon>\n          <ion-label *ngIf=\"controls.password.errors.required\">La contraseña es requerida</ion-label>\n          <ion-label *ngIf=\"controls.password.errors.minlength || controls.password.errors.maxlength\">La contraseña debe ser\n            de 8 a 16 caracteres</ion-label>\n        </ion-item>\n        \n        <ion-button fill=\"clear\" expand=\"block\" mode=\"ios\" class=\"grey-color\" routerLink=\"/signup/forgotpassword\">\n          ¿Olvidaste tu contraseña?\n        </ion-button>\n        <ion-button type=\"submit\"  expand=\"block\" mode=\"ios\" color=\"primary\"  class=\"ion-margin-bottom\">\n          INICIAR SESION\n        </ion-button>\n        <ion-button fill=\"outline\" color=\"primary\" expand=\"block\" mode=\"ios\" class=\"grey-color\" routerLink=\"/signup\">\n          REGÍSTRARSE\n        </ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/guards/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let LoginGuard = class LoginGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(next, state) {
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            return true;
        }
        else {
            if (isLoggedIn == 'si') {
                this.router.navigate(['tabs/home']);
                return false;
            }
            else {
                return true;
            }
        }
    }
};
LoginGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ "./src/app/screens/auth/login/login-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/screens/auth/login/login-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/login.guard */ "./src/app/guards/login.guard.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.page */ "./src/app/screens/auth/login/login.page.ts");





const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"],
        canActivate: [src_app_guards_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/auth/login/login.module.ts":
/*!****************************************************!*\
  !*** ./src/app/screens/auth/login/login.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/screens/auth/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/screens/auth/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/screens/auth/login/login.page.scss":
/*!****************************************************!*\
  !*** ./src/app/screens/auth/login/login.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-top-15vh {\n  margin-top: 15vh;\n}\n\nion-icon {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi10b3AtMTV2aHtcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xufVxuXG5pb24taWNvbntcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG59IiwiLm1hcmdpbi10b3AtMTV2aCB7XG4gIG1hcmdpbi10b3A6IDE1dmg7XG59XG5cbmlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/screens/auth/login/login.page.ts":
/*!**************************************************!*\
  !*** ./src/app/screens/auth/login/login.page.ts ***!
  \**************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_fcm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fcm.service */ "./src/app/services/fcm.service.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/network-status.service */ "./src/app/services/network-status.service.ts");












let LoginPage = class LoginPage {
    constructor(storage, ui, auth, router, fcm, request, network) {
        this.storage = storage;
        this.ui = ui;
        this.auth = auth;
        this.router = router;
        this.fcm = fcm;
        this.request = request;
        this.network = network;
        this.view = false;
        this.loginData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
        });
    }
    ngOnInit() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("data");
        localStorage.removeItem("current_order");
        localStorage.removeItem("current_status");
        localStorage.removeItem("current_status");
        localStorage.removeItem("currentDocuments");
        localStorage.removeItem("longitude");
        localStorage.removeItem("latitude");
        localStorage.removeItem("watchPositionId");
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    get controls() {
        return this.loginData.controls;
    }
    send() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loginData.valid) {
                let { email, password } = this.loginData.value;
                if (this.network.getNetworkStatus().connected) {
                    const loadier = this.ui.loading('Por favor espere...');
                    this.auth.login(email, password)
                        .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loadier).dismiss();
                        console.log("Rol id", res.data);
                        if (res.data.role.id == 5) {
                            console.log("Version", res.data.code_version);
                            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Capacitor"].platform !== 'web') {
                                if (res.data.code_version == src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].VERSION_NAME) {
                                    this.storage.setObject('data', res.data);
                                    localStorage.setItem('isLoggedIn', 'si');
                                    localStorage.setItem('data', JSON.stringify(res.data));
                                    this.auth.setData();
                                    this.sendToken();
                                    this.router.navigate([`/tabs/home`]).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                        if (this.auth.user.available != 0) {
                                        }
                                    }));
                                    localStorage.removeItem("current_order");
                                }
                                else {
                                    yield this.ui.presentAlert({
                                        mode: 'ios',
                                        header: '¡Existe una nueva actualización!',
                                        message: 'Por favor actualizala, para obtener mejor rendimiento posible',
                                        buttons: [
                                            {
                                                text: 'Aceptar',
                                                role: 'cancel',
                                                cssClass: 'secondary',
                                                handler: (blah) => {
                                                    location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].PLAY_STORE_URL;
                                                }
                                            }
                                        ]
                                    });
                                }
                            }
                            else {
                                this.storage.setObject('data', res.data);
                                localStorage.setItem('isLoggedIn', 'si');
                                localStorage.setItem('data', JSON.stringify(res.data));
                                this.auth.setData();
                                this.sendToken();
                                this.router.navigate([`/tabs/home`]).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    if (this.auth.user.available != 0) {
                                        const position = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Geolocation"].getCurrentPosition({
                                            enableHighAccuracy: true
                                        });
                                        // (await loader).dismiss();
                                        localStorage.setItem("latitude", position.coords.latitude.toString());
                                        localStorage.setItem("longitude", position.coords.longitude.toString());
                                    }
                                }));
                            }
                        }
                        else {
                            this.ui.showToast("El usuario existe, pero  no tiene acceso a esta aplicación");
                        }
                    }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loadier).dismiss();
                        if (err.status == 400) {
                            this.ui.showToast(err.error.messages[0]);
                            return;
                        }
                        this.ui.showToast("Error de conexión");
                    }));
                }
                else {
                    this.ui.showToast("Verifique su conexión");
                }
            }
        });
    }
    setView() {
        this.view = !this.view;
    }
    sendToken() {
        if (localStorage.getItem('fcmId')) {
            const obj = {
                user_id: this.auth.user.id,
                token: localStorage.getItem('fcmId'),
                platform: "mobile"
            };
            this.request.post("get_token", obj).subscribe(res => {
            }, err => {
            });
        }
        else {
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_fcm_service__WEBPACK_IMPORTED_MODULE_6__["FcmService"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"] },
    { type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_11__["NetworkStatusService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/screens/auth/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=screens-auth-login-login-module-es2015.js.map