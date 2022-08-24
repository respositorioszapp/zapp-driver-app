(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-tab1-signup-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab1/signup-tab1.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab1/signup-tab1.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 style=\"text-align: center;\">Registro usuario</h4>\n<form [formGroup]=\"personal_information\" (submit)=\"next()\" novalidate>\n  <ion-item  lines=\"none\" class=\"input-text ion-margin-top\">\n    \n    <ion-select placeholder=\"Seleccione una tipo\" name=\"city\" formControlName=\"dni_type_id\" style=\"display: contents;\" [selectedText]=\"type.name\">\n      <ion-select-option *ngFor=\"let item of types; let i = index \" [value]=\"item.id\"  >{{item.name }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.dni_type_id.dirty && controls.dni_type_id.touched && controls.dni_type_id.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.dni_type_id.errors.required\">El tipo de documento es requerido</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"No. Identificación\" formControlName=\"dni\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.dni.dirty && controls.dni.touched && controls.dni.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.dni.errors.required\">El número de identificación es requerido</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Nombre\" formControlName=\"names\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.names.dirty && controls.names.touched && controls.names.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.names.errors.required\">Nombre es requerido</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\"  class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Apellidos\" formControlName=\"lastnames\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.lastnames.dirty && controls.lastnames.touched && controls.lastnames.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\" ></ion-icon>\n    <ion-label *ngIf=\"controls.lastnames.errors.required\" >Apellidos es requerido</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Dirección\" formControlName=\"address\" required></ion-input>\n  </ion-item>\n  <ion-item class=\"danger-color-text\" *ngIf=\"controls.address.dirty && controls.address.touched && controls.address.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.address.errors.required\">Dirección es requerida</ion-label>\n  </ion-item>\n  <ion-item  lines=\"none\" class=\"input-text ion-margin-top\">\n    \n    <ion-select placeholder=\"Seleccione una ciudad\" name=\"city\" formControlName=\"city\" style=\"display: contents;\" [selectedText]=\"city.name\">\n      <ion-select-option *ngFor=\"let item of cities; let i = index \" [value]=\"item.id\"  >{{item.name }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\"  class=\"danger-color-text\" *ngIf=\"controls.city.dirty && controls.city.touched && controls.city.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.city.errors.required\">La ciudad es requerida</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Teléfono\" formControlName=\"phone\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.phone.dirty && controls.phone.touched && controls.phone.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.phone.errors.required\">El teléfono es requerido</ion-label>\n    <ion-label *ngIf=\"controls.phone.errors.minlength || controls.phone.errors.maxlength\">\n      Debe ser 10 dígitos\n    </ion-label>\n    <ion-label *ngIf=\"controls.phone.errors.pattern\">El télefono es un valor numérico</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Email\" formControlName=\"email\" type=\"email\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.email.dirty && controls.email.touched && controls.email.errors\">\n    <ion-icon class=\"danger-color-text\" name=\"alert-circle\" slot=\"start\"></ion-icon>\n    <ion-label *ngIf=\"controls.email.errors.required\">Email es requerido</ion-label>\n    <ion-label *ngIf=\"controls.email.errors.email || controls.email.errors.pattern\">Debe ser un email válido</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Contraseña\" formControlName=\"password\" [type]=\"view ? 'text':'password'\" required></ion-input>\n    <ion-icon [name]=\"view ? 'eye-outline': 'eye-off-outline'\" slot=\"end\" (click)=\"setView()\"></ion-icon>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\"\n    *ngIf=\"controls.password.dirty && controls.password.touched && controls.password.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.password.errors.required\">La contraseña es requerida</ion-label>\n    <ion-label *ngIf=\"controls.password.errors.minlength || controls.password.errors.maxlength\">La contraseña debe\n      ser\n      de 8 a 16 caracteres</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Repetir Contraseña\" formControlName=\"password_confirm\" [type]=\"view_confirm ? 'text':'password'\" required>\n    </ion-input>\n    <ion-icon [name]=\"view_confirm ? 'eye-outline': 'eye-off-outline'\" slot=\"end\" (click)=\"setViewConfirm()\"></ion-icon>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\"\n    *ngIf=\"controls.password_confirm.dirty && controls.password_confirm.touched && controls.password_confirm.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.password_confirm.errors.required\">La contraseña es requerida</ion-label>\n    <ion-label *ngIf=\"controls.password_confirm.errors.mustMatch\">Las contraseñas no coinciden</ion-label>\n  </ion-item>\n  <ion-button type=\"submit\" expand=\"block\" mode=\"ios\" color=\"primary\" class=\"ion-margin-top\" >\n    CONTINUAR\n  </ion-button>\n</form>");

/***/ }),

/***/ "./src/app/screens/auth/signup-tab1/signup-tab1-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/screens/auth/signup-tab1/signup-tab1-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SignupTab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupTab1PageRoutingModule", function() { return SignupTab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-tab1.page */ "./src/app/screens/auth/signup-tab1/signup-tab1.page.ts");




const routes = [
    {
        path: '',
        component: _signup_tab1_page__WEBPACK_IMPORTED_MODULE_3__["SignupTab1Page"]
    }
];
let SignupTab1PageRoutingModule = class SignupTab1PageRoutingModule {
};
SignupTab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupTab1PageRoutingModule);



/***/ }),

/***/ "./src/app/screens/auth/signup-tab1/signup-tab1.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/screens/auth/signup-tab1/signup-tab1.module.ts ***!
  \****************************************************************/
/*! exports provided: SignupTab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupTab1PageModule", function() { return SignupTab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-tab1-routing.module */ "./src/app/screens/auth/signup-tab1/signup-tab1-routing.module.ts");
/* harmony import */ var _signup_tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-tab1.page */ "./src/app/screens/auth/signup-tab1/signup-tab1.page.ts");







let SignupTab1PageModule = class SignupTab1PageModule {
};
SignupTab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupTab1PageRoutingModule"]
        ],
        declarations: [_signup_tab1_page__WEBPACK_IMPORTED_MODULE_6__["SignupTab1Page"]]
    })
], SignupTab1PageModule);



/***/ }),

/***/ "./src/app/screens/auth/signup-tab1/signup-tab1.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/screens/auth/signup-tab1/signup-tab1.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9hdXRoL3NpZ251cC10YWIxL3NpZ251cC10YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9hdXRoL3NpZ251cC10YWIxL3NpZ251cC10YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvYXV0aC9zaWdudXAtdGFiMS9zaWdudXAtdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG59IiwiaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/screens/auth/signup-tab1/signup-tab1.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/screens/auth/signup-tab1/signup-tab1.page.ts ***!
  \**************************************************************/
/*! exports provided: SignupTab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupTab1Page", function() { return SignupTab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_validators_passwod_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/validators/passwod.validator */ "./src/app/validators/passwod.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/network-status.service */ "./src/app/services/network-status.service.ts");








let SignupTab1Page = class SignupTab1Page {
    constructor(requestService, fb, router, ui, network) {
        this.requestService = requestService;
        this.fb = fb;
        this.router = router;
        this.ui = ui;
        this.network = network;
        this.view = false;
        this.view_confirm = false;
        this.cities = [];
        this.city = {};
        this.types = [];
        this.type = {
            id: "",
            name: ""
        };
        /**
         * dni_type_id: information.typeId,
                dni: information.identification,
         */
        this.personal_information = this.fb.group({
            names: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastnames: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dni_type_id: [10, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: [4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]*$')],],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16)]],
            password_confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        }, {
            validators: Object(src_app_validators_passwod_validator__WEBPACK_IMPORTED_MODULE_4__["ComparePassword"])("password", "password_confirm")
        });
        let person = {};
        if (localStorage.getItem("personal_information")) {
            person = JSON.parse(localStorage.getItem("personal_information"));
            console.log("City id", person.city.id);
            this.personal_information
                .setValue({
                names: person.names,
                lastnames: person.lastnames,
                address: person.address,
                city: person.city.id,
                phone: person.phone,
                email: person.email,
                password: person.password,
                password_confirm: person.password_confirm,
                dni: person.dni ? person.dni : '',
                dni_type_id: person.dni_type_id ? person.dni_type_id : 10
            });
        }
    }
    getSelected(item) {
        return item.id == this.controls.city.value;
    }
    setView() {
        this.view = !this.view;
    }
    setViewConfirm() {
        this.view_confirm = !this.view_confirm;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.network.getNetworkStatus().connected) {
                const loader = yield this.ui.loading("Por favor espere...");
                this.requestService.get('indexcities')
                    .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.cities = res.data;
                    this.city = this.cities.find(c => c.id == this.controls.city.value);
                    this.controls.city.valueChanges.subscribe((res => {
                        console.log("Change city", res);
                        this.city = this.cities.find(c => c.id == res);
                        console.log("Change city", this.city);
                    }));
                    this.requestService.get('list/attributes?parameter_id=4').subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                        this.types = res.data;
                        this.type = this.types.find(t => t.id == 10);
                        if (localStorage.getItem("personal_information")) {
                            const person = JSON.parse(localStorage.getItem("personal_information"));
                            this.type = this.types.find(t => t.id == person.dni_type_id);
                        }
                        this.controls.dni_type_id.valueChanges.subscribe(res => {
                            this.type = this.types.find(t => t.id == res);
                        });
                    }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                    }));
                }), err => {
                    this.requestService.get('list/attributes?parameter_id=4').subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                        this.types = res.data;
                        this.type = this.types.find(t => t.id == 10);
                        if (localStorage.getItem("personal_information")) {
                            const person = JSON.parse(localStorage.getItem("personal_information"));
                            this.type = this.types.find(t => t.id == person.dni_type_id);
                        }
                        this.controls.dni_type_id.valueChanges.subscribe(res => {
                            this.type = this.types.find(t => t.id == res);
                        });
                    }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                    }));
                });
            }
            else {
                this.ui.showToast("Verifica tu conexión");
            }
        });
    }
    get controls() {
        return this.personal_information.controls;
    }
    next() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const obj = Object.assign({}, this.personal_information.value);
            obj.city = this.city;
            if (this.personal_information.valid) {
                localStorage.setItem("personal_information", JSON.stringify(obj));
                this.router.navigate(["/signup/tab2"]);
            }
        });
    }
};
SignupTab1Page.ctorParameters = () => [
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_6__["UiService"] },
    { type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"] }
];
SignupTab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup-tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab1/signup-tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup-tab1.page.scss */ "./src/app/screens/auth/signup-tab1/signup-tab1.page.scss")).default]
    })
], SignupTab1Page);



/***/ })

}]);
//# sourceMappingURL=signup-tab1-signup-tab1-module-es2015.js.map