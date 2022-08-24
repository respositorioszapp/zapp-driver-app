(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-tab2-signup-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab2/signup-tab2.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab2/signup-tab2.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 style=\"text-align: center;\">Registro vehículo</h4>\n<form [formGroup]=\"vehicle_information\" (submit)=\"save()\" novalidate>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-select placeholder=\"Tipo de vehículo\" formControlName=\"vehicle_type\" style=\"display: contents;\" required [selectedText]=\"transpot_type.name\">\n      <ion-select-option *ngFor=\"let item of transport_types\" [value]=\"item.id\">{{item.name }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\"\n    *ngIf=\"controls.vehicle_type.dirty && controls.vehicle_type.touched && controls.vehicle_type.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.vehicle_type.errors.required\">El tipo de vehículo es requerida</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Placa\" formControlName=\"plate\" required ></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.plate.dirty && controls.plate.touched && controls.plate.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.plate.errors.required\">La placa es requerido</ion-label>\n    <ion-label *ngIf=\"controls.plate.errors.minlength || controls.plate.errors.maxlength\">La placa debe contener 6\n      caracteres</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Marca\" formControlName=\"brand\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.brand.dirty && controls.brand.touched && controls.brand.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.brand.errors.required\">La marca es requerido</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-input placeholder=\"Modelo\" formControlName=\"model\" required></ion-input>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.model.dirty && controls.model.touched && controls.model.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.model.errors.required\">El modelo es requerido</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-select placeholder=\"Año\" formControlName=\"year\" style=\"display: contents;\">\n      <ion-select-option *ngFor=\"let item of common.years\" [value]=\"item\">{{item }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.year.dirty && controls.year.touched && controls.year.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.year.errors.required\">El año es requerida</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n    <ion-select placeholder=\"Color\" formControlName=\"color\" style=\"display: contents;\" required>\n      <ion-select-option *ngFor=\"let item of common.colors\" [value]=\"item\">{{item }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.color.dirty && controls.color.touched && controls.color.errors\">\n    <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n    <ion-label *ngIf=\"controls.color.errors.required\">El color es requerida</ion-label>\n  </ion-item>\n  <a href=\"https://zapplogistica.com/politicas/\" class=\"ion-margin-top ion-text-center\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"font-size: 1.2em;display:block;color: #1c024b;\" color=\"primary\">Ver términos y condiciones</a>\n  <ion-item lines=\"none\">\n    \n    <ion-label class=\"ion-text-justify\">Aceptar los términos y condiciones</ion-label>\n    <ion-checkbox slot=\"start\" formControlName=\"terms\" style=\" margin-right: 10px;\" ></ion-checkbox>\n  </ion-item>\n  \n  <!-- -->\n  <ion-button type=\"submit\" expand=\"block\" mode=\"ios\" color=\"primary\" >\n    ENVIAR\n  </ion-button>\n</form>");

/***/ }),

/***/ "./src/app/screens/auth/signup-tab2/signup-tab2-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/screens/auth/signup-tab2/signup-tab2-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SignupTab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupTab2PageRoutingModule", function() { return SignupTab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-tab2.page */ "./src/app/screens/auth/signup-tab2/signup-tab2.page.ts");




const routes = [
    {
        path: '',
        component: _signup_tab2_page__WEBPACK_IMPORTED_MODULE_3__["SignupTab2Page"]
    }
];
let SignupTab2PageRoutingModule = class SignupTab2PageRoutingModule {
};
SignupTab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupTab2PageRoutingModule);



/***/ }),

/***/ "./src/app/screens/auth/signup-tab2/signup-tab2.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/screens/auth/signup-tab2/signup-tab2.module.ts ***!
  \****************************************************************/
/*! exports provided: SignupTab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupTab2PageModule", function() { return SignupTab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-tab2-routing.module */ "./src/app/screens/auth/signup-tab2/signup-tab2-routing.module.ts");
/* harmony import */ var _signup_tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-tab2.page */ "./src/app/screens/auth/signup-tab2/signup-tab2.page.ts");







let SignupTab2PageModule = class SignupTab2PageModule {
};
SignupTab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupTab2PageRoutingModule"]
        ],
        declarations: [_signup_tab2_page__WEBPACK_IMPORTED_MODULE_6__["SignupTab2Page"]]
    })
], SignupTab2PageModule);



/***/ }),

/***/ "./src/app/screens/auth/signup-tab2/signup-tab2.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/screens/auth/signup-tab2/signup-tab2.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvYXV0aC9zaWdudXAtdGFiMi9zaWdudXAtdGFiMi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/screens/auth/signup-tab2/signup-tab2.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/screens/auth/signup-tab2/signup-tab2.page.ts ***!
  \**************************************************************/
/*! exports provided: SignupTab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupTab2Page", function() { return SignupTab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var src_app_services_common_atrributes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common-atrributes.service */ "./src/app/services/common-atrributes.service.ts");
/* harmony import */ var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/network-status.service */ "./src/app/services/network-status.service.ts");








let SignupTab2Page = class SignupTab2Page {
    constructor(fb, request, router, ui, common, network) {
        this.fb = fb;
        this.request = request;
        this.router = router;
        this.ui = ui;
        this.common = common;
        this.network = network;
        this.transport_types = [];
        this.personal_information = {};
        this.transpot_type = {};
        this.vehicle_information = this.fb.group({
            vehicle_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            plate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            year: [new Date().getFullYear(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            terms: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]]
        });
    }
    plateOnChange() {
        let plate = this.vehicle_information.value.plate;
        plate = plate.toUpperCase();
        if (plate.length > 6) {
            plate = plate.substring(0, 6);
        }
        this.controls.plate.setValue(plate);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (localStorage.getItem("personal_information")) {
                this.personal_information = JSON.parse(localStorage.getItem("personal_information"));
            }
            if (this.network.getNetworkStatus().connected) {
                const loader = yield this.ui.loading("Por favor espere...");
                this.request.get('list/attributes?parameter_id=2')
                    .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.transport_types = res.data;
                    if (localStorage.getItem("vehicle_information")) {
                        const vehicle = JSON.parse(localStorage.getItem("vehicle_information"));
                        this.vehicle_information.setValue({
                            vehicle_type: vehicle.vehicle_type,
                            plate: vehicle.plate,
                            brand: vehicle.brand,
                            model: vehicle.model,
                            color: vehicle.color,
                            year: new Date().getFullYear(),
                            terms: false
                        });
                        this.transpot_type = this.transport_types.find(t => t.id == vehicle.vehicle_type);
                        this.controls.vehicle_type.valueChanges.subscribe(res => {
                            this.transpot_type = this.transport_types.find(t => t.id == res);
                        });
                    }
                    (yield loader).dismiss();
                }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log("Error", err);
                    (yield loader).dismiss();
                }));
            }
            else {
                this.ui.showToast("Verifique su conexión");
            }
        });
    }
    get controls() {
        return this.vehicle_information.controls;
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.vehicle_information.valid) {
                this.personal_information = Object.assign(Object.assign({}, this.personal_information), this.vehicle_information.value);
                this.personal_information.plate = this.personal_information.plate.toUpperCase();
                console.log(this.personal_information);
                localStorage.setItem("vehicle_information", JSON.stringify(this.vehicle_information.value));
                if (this.network.getNetworkStatus().connected) {
                    const loader = yield this.ui.loading("Por favor espere...");
                    const obj = {
                        dni: this.personal_information.dni,
                        dni_type_id: this.personal_information.dni_type_id,
                        role_id: 5,
                        first_name: this.personal_information.names,
                        last_name: this.personal_information.lastnames,
                        address: this.personal_information.address,
                        phone: this.personal_information.phone,
                        email: this.personal_information.email,
                        city_id: this.personal_information.city.id,
                        country: "CO",
                        state_id: this.personal_information.city.state_id,
                        password: this.personal_information.password,
                        password_confirmation: this.personal_information.password_confirm,
                        transport_type_id: this.personal_information.vehicle_type,
                        model: this.personal_information.model,
                        brand: this.personal_information.brand,
                        color: this.personal_information.color,
                        plate: this.personal_information.plate,
                        year: this.vehicle_information.value.year
                    };
                    console.log("Obj", obj);
                    this.request.post('driver/create_driver', obj)
                        .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                        localStorage.removeItem("personal_information");
                        localStorage.removeItem("vehicle_information");
                        this.ui.showToast("Usuario creado exitosamente", () => {
                            this.router.navigate(['/login']);
                        });
                    }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                        console.log(err);
                        if (err.status == 400) {
                            if (err.error) {
                                if (err.error.messages) {
                                    this.ui.showToast(err.error.messages[0]);
                                }
                                return;
                            }
                        }
                        this.ui.showToast("Ha ocurrido un error en el servidor");
                    }));
                }
                else {
                    this.ui.showToast("Verifique su conexión");
                }
            }
            else {
                if (this.controls.terms.invalid) {
                    yield this.ui.presentAlert({
                        mode: 'ios',
                        header: 'Debe aceptar los términos y condiciones',
                        buttons: [
                            {
                                text: 'Aceptar',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {
                                }
                            }
                        ]
                    });
                }
            }
        });
    }
};
SignupTab2Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"] },
    { type: src_app_services_common_atrributes_service__WEBPACK_IMPORTED_MODULE_6__["CommonAtrributesService"] },
    { type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"] }
];
SignupTab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup-tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/auth/signup-tab2/signup-tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup-tab2.page.scss */ "./src/app/screens/auth/signup-tab2/signup-tab2.page.scss")).default]
    })
], SignupTab2Page);



/***/ })

}]);
//# sourceMappingURL=signup-tab2-signup-tab2-module-es2015.js.map