(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-personal-information-personal-information-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/personal-information/personal-information.page.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/personal-information/personal-information.page.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content color=\"warning\">\n  <ion-button fill=\"clear\" (click) =\"back()\" style=\"position: absolute;\n  left: 0px;\n  padding: 10px;\" >\n    <ion-icon name=\"arrow-back-outline\"   slot=\"icon-only\"  ></ion-icon>\n  </ion-button>\n  <div style=\"position: relative;\">\n    <div class=\"ion-text-center margin-top-15vh ion-padding-bottom\" style=\"width: 60%;\n    margin: auto;\n    position: absolute;\n    left: 0;\n    right: 0;\">\n      <img src=\"assets/imgs/logo-morado.png\" width=\"100\">\n    </div>\n  </div>\n  <ion-card style=\"margin-top:50px\">\n    <ion-card-header>\n      <ion-card-subtitle class=\"ion-text-center\">\n        <h3 ><span class=\"black-color-text ion-text-justify\">Información personal</span></h3>\n        \n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"personal_information\" (submit)=\"update()\" novalidate>\n        <ion-item  lines=\"none\" class=\"input-text ion-margin-top\">\n    \n          <ion-select placeholder=\"Seleccione una tipo\" name=\"city\" formControlName=\"dni_type_id\" style=\"display: contents;\" [selectedText]=\"type.name\" disabled=\"true\">\n            <ion-select-option *ngFor=\"let item of types; let i = index \" [value]=\"item.id\"  >{{item.name }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.dni_type_id.dirty && controls.dni_type_id.touched && controls.dni_type_id.errors\">\n          <ion-icon name=\"alert-circle\" class=\"danger-color-text\" slot=\"start\"></ion-icon>\n          <ion-label *ngIf=\"controls.dni_type_id.errors.required\">El tipo de documento es requerido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"No. Identificación\" formControlName=\"dni\" disabled=\"true\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.dni.dirty && controls.dni.touched && controls.dni.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.dni.errors.required\">El número de identificación es requerido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Nombre\" formControlName=\"first_name\" disabled=\"true\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.first_name.dirty && controls.first_name.touched && controls.first_name.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.first_name.errors.required\">Nombre es requerido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\"  class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Apellidos\" formControlName=\"last_name\" disabled=\"true\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.last_name.dirty && controls.last_name.touched && controls.last_name.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\" ></ion-icon>\n          <ion-label *ngIf=\"controls.last_name.errors.required\" >Apellidos es requerido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Dirección\" formControlName=\"address\" required></ion-input>\n        </ion-item>\n        <ion-item class=\"danger-color-text\" *ngIf=\"controls.address.dirty && controls.address.touched && controls.address.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.address.errors.required\">Dirección es requerida</ion-label>\n        </ion-item>\n        <ion-item  lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-select placeholder=\"Seleccione una ciudad\" name=\"city\" formControlName=\"city\" style=\"display: contents;\" [selectedText]=\"city.name\">\n            <ion-select-option *ngFor=\"let item of cities\" [value]=\"item.id\" selected=\"item.id == city.id\" >{{item.name }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.city.dirty && controls.city.touched && controls.city.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.city.errors.required\">La ciudad es requerida</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Teléfono\" formControlName=\"phone\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\"controls.phone.dirty && controls.phone.touched && controls.phone.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text\"></ion-icon>\n          <ion-label *ngIf=\"controls.phone.errors.required\">El teléfono es requerido</ion-label>\n          <ion-label *ngIf=\"controls.phone.errors.minlength || controls.phone.errors.maxlength\">\n            Debe ser 10 dígitos\n          </ion-label>\n          <ion-label *ngIf=\"controls.phone.errors.pattern\">El teléfono es un valor numérico</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Email\" formControlName=\"email\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text\" *ngIf=\" controls.email.dirty && controls.email.touched && controls.email.errors\">\n          <ion-icon class=\"danger-color-text\" name=\"alert-circle\" slot=\"start\"></ion-icon>\n          <ion-label *ngIf=\"controls.email.errors.required\">Email es requerido</ion-label>\n          <ion-label *ngIf=\"controls.email.errors.email\">Debe ser un email válido</ion-label>\n        </ion-item>\n        <ion-button type=\"submit\" expand=\"block\" mode=\"ios\" color=\"primary\" class=\"ion-margin-top\"  >\n          ACTUALIZAR\n        </ion-button>\n      </form>     \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n ");

/***/ }),

/***/ "./src/app/screens/screens-tabs/personal-information/personal-information-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/personal-information/personal-information-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: PersonalInformationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationPageRoutingModule", function() { return PersonalInformationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _personal_information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal-information.page */ "./src/app/screens/screens-tabs/personal-information/personal-information.page.ts");




const routes = [
    {
        path: '',
        component: _personal_information_page__WEBPACK_IMPORTED_MODULE_3__["PersonalInformationPage"]
    }
];
let PersonalInformationPageRoutingModule = class PersonalInformationPageRoutingModule {
};
PersonalInformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonalInformationPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/personal-information/personal-information.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/personal-information/personal-information.module.ts ***!
  \******************************************************************************************/
/*! exports provided: PersonalInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationPageModule", function() { return PersonalInformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _personal_information_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-information-routing.module */ "./src/app/screens/screens-tabs/personal-information/personal-information-routing.module.ts");
/* harmony import */ var _personal_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-information.page */ "./src/app/screens/screens-tabs/personal-information/personal-information.page.ts");







let PersonalInformationPageModule = class PersonalInformationPageModule {
};
PersonalInformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _personal_information_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalInformationPageRoutingModule"]
        ],
        declarations: [_personal_information_page__WEBPACK_IMPORTED_MODULE_6__["PersonalInformationPage"]]
    })
], PersonalInformationPageModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/personal-information/personal-information.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/personal-information/personal-information.page.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy10YWJzL3BlcnNvbmFsLWluZm9ybWF0aW9uL3BlcnNvbmFsLWluZm9ybWF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/screens/screens-tabs/personal-information/personal-information.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/personal-information/personal-information.page.ts ***!
  \****************************************************************************************/
/*! exports provided: PersonalInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationPage", function() { return PersonalInformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/network-status.service */ "./src/app/services/network-status.service.ts");








let PersonalInformationPage = class PersonalInformationPage {
    constructor(requestService, fb, router, ui, auth, network) {
        this.requestService = requestService;
        this.fb = fb;
        this.router = router;
        this.ui = ui;
        this.auth = auth;
        this.network = network;
        this.cities = [];
        this.city = {};
        this.types = [];
        this.type = {
            id: "",
            name: ""
        };
        //[{ value: '', disabled: true }, Validators.required]
        this.personal_information = this.fb.group({
            dni_type_id: [10, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: [4,],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')],],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
        });
        this.objectChange = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { dni_type_id, dni, address, city_id, email, first_name, last_name, phone, } = this.auth.person;
            this.personal_information.setValue({
                dni_type_id: dni_type_id ? dni_type_id : 10,
                dni: dni ? dni : '',
                address,
                first_name,
                city: city_id ? city_id : 4,
                email,
                last_name,
                phone
            });
            if (this.network.getNetworkStatus().connected) {
                const loader = yield this.ui.loading("Por favor espere...");
                this.requestService.get('indexcities')
                    .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.cities = res.data;
                    const obj = {
                        dni_type_id: dni_type_id ? dni_type_id : 10,
                        dni: dni ? dni : '',
                        address,
                        city: city_id,
                        email,
                        first_name,
                        last_name,
                        phone
                    };
                    this.city = this.cities.find(c => c.id == city_id);
                    this.controls.city.valueChanges.subscribe((res => {
                        console.log("Change city", res);
                        this.city = this.cities.find(c => c.id == res);
                        console.log("Change city", this.city);
                    }));
                    this.personal_information.valueChanges.subscribe(res => {
                        console.log("Objeto", obj);
                        console.log("Res", res);
                        const y = Object.keys(obj).find(key => {
                            return obj[key] != res[key];
                        });
                        if (y) {
                            this.objectChange = true;
                        }
                        else {
                            this.objectChange = false;
                        }
                    });
                    this.requestService.get('list/attributes?parameter_id=4').subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                        this.types = res.data;
                        const id = this.auth.person.dni_type_id ? this.auth.person.dni_type_id : 10;
                        this.type = this.types.find(t => t.id == id);
                        this.controls.dni_type_id.valueChanges.subscribe(res => {
                            this.type = this.types.find(t => t.id == res);
                        });
                    }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                    }));
                }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    (yield loader).dismiss();
                }));
            }
            else {
                this.ui.showToast("Verifique su conexión");
            }
        });
    }
    get controls() {
        return this.personal_information.controls;
    }
    getSelected() {
    }
    back() {
        this.router.navigate(['/tabs/profile']);
    }
    update() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.objectChange) {
                if (this.personal_information.valid) {
                    if (this.network.getNetworkStatus().connected) {
                        const loader = yield this.ui.loading("Por favor espere...");
                        const { dni_type_id, dni, first_name, last_name, address, phone, email, city_id, } = this.personal_information.value;
                        const obj = {
                            dni_type_id,
                            dni,
                            user_id: this.auth.user.id,
                            role_id: 5,
                            first_name,
                            last_name,
                            address,
                            phone,
                            email,
                            city_id: this.city.id,
                            country: "CO",
                            state_id: this.city.state_id,
                            transport_type_id: this.auth.vehicles.transport_type_id,
                            model: this.auth.vehicles.model,
                            brand: this.auth.vehicles.brand,
                            color: this.auth.vehicles.color,
                            plate: this.auth.vehicles.plate,
                            year: this.auth.vehicles.year,
                        };
                        console.log("Obj", obj);
                        this.requestService.post('driver/update_driver', obj)
                            .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            (yield loader).dismiss();
                            this.auth.setPerson({
                                dni_type_id,
                                dni,
                                first_name,
                                last_name,
                                address,
                                phone,
                                email,
                                city_id: this.city.id,
                                country: "CO",
                                state_id: this.city.state_id,
                            });
                            this.ui.showToast("Usuario actualizado exitosamente", () => {
                                this.router.navigate(['/tabs/profile']);
                            });
                        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            (yield loader).dismiss();
                            console.log(err);
                            this.ui.showToast(err.error.messages[0]);
                        }));
                    }
                    else {
                        this.ui.showToast("Verifique su conexión");
                    }
                }
            }
            else {
                this.ui.showToast("Debe cambiar alguno de los campos");
            }
        });
    }
};
PersonalInformationPage.ctorParameters = () => [
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"] }
];
PersonalInformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-information',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./personal-information.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/personal-information/personal-information.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./personal-information.page.scss */ "./src/app/screens/screens-tabs/personal-information/personal-information.page.scss")).default]
    })
], PersonalInformationPage);



/***/ })

}]);
//# sourceMappingURL=screens-screens-tabs-personal-information-personal-information-module-es2015.js.map