(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-vehicle-information-vehicle-information-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"warning\">\n  <ion-button fill=\"clear\" (click)=\"back()\" style=\"position: absolute;\n  left: 0px;\n  padding: 10px;\" >\n    <ion-icon name=\"arrow-back-outline\"   slot=\"icon-only\"  ></ion-icon>\n  </ion-button>\n  <div style=\"position: relative;\">\n    <div class=\"ion-text-center margin-top-15vh ion-padding-bottom\" style=\"width: 60%;\n    margin: auto;\n    position: absolute;\n    left: 0;\n    right: 0;\">\n      <img src=\"assets/imgs/logo-morado.png\" width=\"100\">\n    </div>\n  </div>\n  <ion-card style=\"margin-top:50px\">\n    <ion-card-header>\n      <ion-card-subtitle class=\"ion-text-center\">\n        <h3 ><span class=\"black-color-text ion-text-justify\">Información del vehículo</span></h3>\n        \n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"vehicle_information\" (submit)=\"save()\" novalidate>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-select placeholder=\"Tipo de vehículo\" formControlName=\"transport_type_id\" style=\"display: contents;\" required [selectedText]=\"transport_type.name\">\n            <ion-select-option *ngFor=\"let item of transport_types\" [value]=\"item.id\">{{item.name }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\"\n          *ngIf=\"controls.transport_type_id.dirty && controls.transport_type_id.touched && controls.transport_type_id.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.transport_type_id.errors.required\">El tipo de vehículo es requerida</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Placa\" formControlName=\"plate\" required ></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\" *ngIf=\"controls.plate.dirty && controls.plate.touched && controls.plate.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.plate.errors.required\">La placa es requerido</ion-label>\n          <ion-label *ngIf=\"controls.plate.errors.minlength || controls.plate.errors.maxlength\">La placa debe contener 6\n            caracteres</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Marca\" formControlName=\"brand\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\" *ngIf=\"controls.brand.dirty && controls.brand.touched && controls.brand.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.brand.errors.required\">La marca es requerido</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-input placeholder=\"Modelo\" formControlName=\"model\" required></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\" *ngIf=\"controls.model.dirty && controls.model.touched && controls.model.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.model.errors.required\">El modelo es requerido</ion-label>\n        </ion-item>\n      \n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-select placeholder=\"Año\" formControlName=\"year\" style=\"display: contents;\">\n            <ion-select-option *ngFor=\"let item of common.years\" [value]=\"item\">{{item }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\" *ngIf=\"controls.year.dirty && controls.year.touched && controls.year.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.year.errors.required\">El año es requerido</ion-label>\n        </ion-item>\n      \n        <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n          <ion-select placeholder=\"Color\" formControlName=\"color\" style=\"display: contents;\" required>\n            <ion-select-option *ngFor=\"let item of common.colors\" [value]=\"item\">{{item }}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"danger-color-text ion-text-justify\" *ngIf=\"controls.color.dirty && controls.color.touched && controls.color.errors\">\n          <ion-icon name=\"alert-circle\" slot=\"start\" class=\"danger-color-text ion-text-justify\"></ion-icon>\n          <ion-label *ngIf=\"controls.color.errors.required\" >El color es requerido</ion-label>\n        </ion-item>\n        <!--  -->\n        <ion-button type=\"submit\" expand=\"block\" mode=\"ios\" color=\"primary\" class =\"ion-margin-top\"  >\n          ACTUALIZAR\n        </ion-button>\n      </form>      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/screens/screens-tabs/vehicle-information/vehicle-information-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/vehicle-information/vehicle-information-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: VehicleInformationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleInformationPageRoutingModule", function() { return VehicleInformationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vehicle_information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle-information.page */ "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.ts");




const routes = [
    {
        path: '',
        component: _vehicle_information_page__WEBPACK_IMPORTED_MODULE_3__["VehicleInformationPage"]
    }
];
let VehicleInformationPageRoutingModule = class VehicleInformationPageRoutingModule {
};
VehicleInformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VehicleInformationPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/vehicle-information/vehicle-information.module.ts ***!
  \****************************************************************************************/
/*! exports provided: VehicleInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleInformationPageModule", function() { return VehicleInformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vehicle_information_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle-information-routing.module */ "./src/app/screens/screens-tabs/vehicle-information/vehicle-information-routing.module.ts");
/* harmony import */ var _vehicle_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-information.page */ "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.ts");







let VehicleInformationPageModule = class VehicleInformationPageModule {
};
VehicleInformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _vehicle_information_routing_module__WEBPACK_IMPORTED_MODULE_5__["VehicleInformationPageRoutingModule"]
        ],
        declarations: [_vehicle_information_page__WEBPACK_IMPORTED_MODULE_6__["VehicleInformationPage"]]
    })
], VehicleInformationPageModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy10YWJzL3ZlaGljbGUtaW5mb3JtYXRpb24vdmVoaWNsZS1pbmZvcm1hdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.ts ***!
  \**************************************************************************************/
/*! exports provided: VehicleInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleInformationPage", function() { return VehicleInformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_common_atrributes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common-atrributes.service */ "./src/app/services/common-atrributes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/network-status.service */ "./src/app/services/network-status.service.ts");










let VehicleInformationPage = class VehicleInformationPage {
    constructor(fb, request, router, ui, auth, common, loadingController, network) {
        this.fb = fb;
        this.request = request;
        this.router = router;
        this.ui = ui;
        this.auth = auth;
        this.common = common;
        this.loadingController = loadingController;
        this.network = network;
        this.transport_types = [];
        this.personal_information = {};
        this.transport_type = {};
        this.vehicle_information = this.fb.group({
            transport_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            plate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            year: [2020, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.objectChange = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.network.getNetworkStatus().connected) {
                const loader = yield this.loadingController.create({ message: "Por favor espere..." });
                yield loader.present();
                this.request.get('list/attributes?parameter_id=2')
                    .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.transport_types = res.data;
                    if (this.auth.vehicles) {
                        let { brand, color, model, plate, transport_type_id, year } = this.auth.vehicles;
                        this.transport_type = this.transport_types.find(t => t.name == transport_type_id || t.id == transport_type_id);
                        transport_type_id = this.transport_type.id;
                        this.vehicle_information.setValue({
                            brand,
                            color,
                            model,
                            plate,
                            transport_type_id: this.transport_type.id,
                            year: Number(year)
                        });
                        const obj = {
                            brand,
                            color,
                            model,
                            plate,
                            transport_type_id,
                            year
                        };
                        this.vehicle_information.valueChanges.subscribe(res => {
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
                    }
                    else {
                        this.objectChange = true;
                    }
                    this.controls.transport_type_id.valueChanges.subscribe(res => {
                        this.transport_type = this.transport_types.find(t => t.id == res);
                    });
                    (yield loader).dismiss();
                }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    (yield loader).dismiss();
                    console.log("Error", error);
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
    plateOnChange() {
        let plate = this.vehicle_information.value.plate;
        plate = plate.toUpperCase();
        if (plate.length > 6) {
            plate = plate.substring(0, 5);
        }
        this.controls.plate.setValue(plate);
    }
    back() {
        this.router.navigate(['/tabs/profile']);
    }
    save() {
        if (this.objectChange) {
            if (this.vehicle_information.valid) {
                if (this.network.getNetworkStatus().connected) {
                    this.ui.loading("Por favor espere...");
                    const { brand, color, model, plate, transport_type_id, year } = this.vehicle_information.value;
                    const obj = {
                        user_id: this.auth.user.id,
                        role_id: 5,
                        dni_type_id: this.auth.person.dni_type_id,
                        dni: this.auth.person.dni,
                        first_name: this.auth.person.first_name,
                        last_name: this.auth.person.last_name,
                        address: this.auth.person.address,
                        phone: this.auth.person.phone,
                        email: this.auth.person.email,
                        city_id: this.auth.person.city_id,
                        country: "CO",
                        state_id: this.auth.person.state_id,
                        transport_type_id,
                        model,
                        brand,
                        color,
                        plate,
                        year
                    };
                    console.log("Obj", obj);
                    this.request.post('driver/update_driver', obj)
                        .subscribe((res) => {
                        this.ui.loadingDissmiss();
                        this.auth.setVehicles({
                            transport_type_id,
                            model,
                            brand,
                            color,
                            plate,
                            year
                        });
                        this.ui.showToast("Usuario actualizado exitosamente", () => {
                            this.router.navigate(['/tabs/profile']);
                        });
                    }, (err) => {
                        this.ui.loadingDissmiss();
                        console.log(err);
                        this.ui.showToast(err.error.messages[0]);
                    });
                }
                else {
                    this.ui.showToast("Verifique su conexión");
                }
            }
        }
        else {
            this.ui.showToast("Debe cambiar alguno de los campos");
        }
    }
};
VehicleInformationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_services_common_atrributes_service__WEBPACK_IMPORTED_MODULE_7__["CommonAtrributesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_9__["NetworkStatusService"] }
];
VehicleInformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-information',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vehicle-information.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vehicle-information.page.scss */ "./src/app/screens/screens-tabs/vehicle-information/vehicle-information.page.scss")).default]
    })
], VehicleInformationPage);



/***/ })

}]);
//# sourceMappingURL=screens-screens-tabs-vehicle-information-vehicle-information-module-es2015.js.map