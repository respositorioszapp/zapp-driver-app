(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/profile/profile.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/profile/profile.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>home</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n<ion-content color=\"warning\">\n  <div class=\"ion-padding ion-text-center\">\n    <img src=\"assets/imgs/logo-morado.png\" width=\"100\">\n  </div>\n  <div class=\"ion-text-center\" style=\"position: relative;\">\n    <div style=\"position: relative;display: inline;\">\n\n      <img [src]=\"image\" width=\"70\" (click)=\"takePhoto()\" style=\"border-radius: 50%;\n      width: 100px;\n      height: 100px;\">\n      <ion-icon name=\"camera\" style=\"font-size: 1.8em;\n      margin-left: -26px;\n      color: #49158c;\"></ion-icon>\n    </div>\n\n  </div>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle class=\"ion-text-center\">\n        <div style=\"display: inline;\">\n          <span class=\"black-color-text\">{{auth.user.name}}</span>\n          \n          <span class=\"grey-color-text\" style=\"display: block;\">{{auth.user.email}}</span>\n        </div>\n        <div style=\"    position: relative;\n            width: 50%;\n        margin: auto;\n        border-radius: 20px;\" [ngClass]=\"{'bg-oro': level.level_id == 3, 'bg-silver': level.level_id == 2, 'bg-bronce': level.level_id == 1, 'bg-no-level': level.level_id == 0, 'bg-elite': level.level_id == 4}\">\n          <h4 style=\"    margin-top: 10px;\n          margin-bottom: 2px;\">{{level.level_name}}\n          <ion-icon name=\"ribbon-outline\" style=\"font-size: 1em;\n          \"></ion-icon>\n          </h4>\n        </div>\n        \n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <h4 class=\"ion-text-center\">Antiguedad</h4>\n      <h2 class=\"ion-text-center\" style=\"font-size: 1.5em;\n      font-weight: bold;\">{{antiquity}}</h2>\n      <ion-grid class=\"ion-text-center\">\n        <ion-row>\n\n          <ion-col>\n            <span style=\"display: block;\">Calificación</span>\n          </ion-col>\n          <ion-col>\n            <span style=\"display: block;\">Viajes realizados</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" size=\"small\" style=\"font-size: 1.5em;\">\n              {{score}} <ion-icon name=\"star\" class=\"text-yellow\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" size=\"small\" style=\"font-size: 1.5em;\">\n              {{travels}} <ion-icon name=\"airplane\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- <div class=\"ion-text-center\" style=\"display: flex;width: 80%;margin: auto;\">\n        \n        \n      </div> -->\n\n      <ion-list>\n        <ion-item expand=\"block\" lines=\"none\" routerLink=\"/tabs/personal-information\">\n          <ion-label>Datos Personales</ion-label>\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\" color=\"primary\"></ion-icon>\n        </ion-item>\n\n        <ion-item lines=\"none\" routerLink=\"/tabs/vehicle-information\">\n          <ion-label>Datos del vehículo</ion-label>\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\" color=\"primary\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" routerLink=\"/tabs/documents\">\n          <ion-label>Documentos</ion-label>\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\" color=\"primary\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" routerLink=\"/tabs/change-passwsord\">\n          <ion-label>Cambiar contraseña</ion-label>\n          <ion-icon slot=\"end\" name=\"reload-outline\" color=\"primary\"></ion-icon>\n\n        </ion-item>\n        <ion-item lines=\"none\" routerLink=\"/tabs/liquidation\">\n          <ion-label>Liquidación</ion-label>\n          <ion-icon slot=\"end\" name=\"reload-outline\" color=\"primary\"></ion-icon>\n\n        </ion-item>\n        <!-- <ion-item  lines=\"none\" (click)=\"goToPolicies()\">\n          <ion-label>Términos y condiciones</ion-label>\n          <ion-icon name=\"receipt-outline\" slot=\"end\" color=\"primary\"></ion-icon>\n        </ion-item> -->\n        <ion-item lines=\"none\" routerLink=\"/tabs/about\">\n          <ion-label>Acerca de la aplicación</ion-label>\n          <ion-icon name=\"alert-circle-outline\" color=\"primary\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" (click)=\"logOut()\">\n          <ion-label>Cerrar Sesión</ion-label>\n          <ion-icon slot=\"end\" name=\"log-out-outline\" color=\"primary\"></ion-icon>\n\n        </ion-item>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/screens/screens-tabs/profile/profile-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/profile/profile-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/screens/screens-tabs/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/profile/profile.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/screens/screens-tabs/profile/profile.module.ts ***!
  \****************************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/screens/screens-tabs/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/screens/screens-tabs/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"],],
        providers: []
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/profile/profile.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/screens/screens-tabs/profile/profile.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-yellow {\n  color: #F6D000;\n}\n\n.text-black {\n  color: black;\n}\n\n.text-bronce {\n  color: #895024;\n}\n\n.text-silver {\n  color: #BABABA;\n}\n\n.text-elite {\n  color: #0381F2;\n}\n\n.bg-no-level {\n  background-color: black;\n  color: white;\n}\n\n.bg-bronce {\n  background-color: #895024;\n  color: white;\n}\n\n.bg-silver {\n  background-color: #BABABA;\n  color: white;\n}\n\n.bg-oro {\n  background-color: #F6D000;\n  color: white;\n}\n\n.bg-elite {\n  background-color: #0381F2;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9zY3JlZW5zLXRhYnMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9zY3JlZW5zLXRhYnMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL3NjcmVlbnMtdGFicy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQteWVsbG93e1xuICAgIGNvbG9yOiAjRjZEMDAwO1xufVxuXG4udGV4dC1ibGFja3tcbiAgICBjb2xvcjogYmxhY2sgO1xufVxuXG4udGV4dC1icm9uY2V7XG4gICAgY29sb3I6ICAjODk1MDI0IDtcbn1cblxuLnRleHQtc2lsdmVye1xuICAgIGNvbG9yOiAgI0JBQkFCQSA7XG59XG5cbi50ZXh0LWVsaXRle1xuICAgIGNvbG9yOiAjMDM4MUYyO1xufVxuXG4uYmctbm8tbGV2ZWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmctYnJvbmNle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OTUwMjQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmctc2lsdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQUJBQkE7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5iZy1vcm97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RDAwMDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuLmJnLWVsaXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzgxRjI7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLnRleHQteWVsbG93IHtcbiAgY29sb3I6ICNGNkQwMDA7XG59XG5cbi50ZXh0LWJsYWNrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udGV4dC1icm9uY2Uge1xuICBjb2xvcjogIzg5NTAyNDtcbn1cblxuLnRleHQtc2lsdmVyIHtcbiAgY29sb3I6ICNCQUJBQkE7XG59XG5cbi50ZXh0LWVsaXRlIHtcbiAgY29sb3I6ICMwMzgxRjI7XG59XG5cbi5iZy1uby1sZXZlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy1icm9uY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk1MDI0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy1zaWx2ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFCQUJBO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy1vcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZEMDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy1lbGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzgxRjI7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/screens/screens-tabs/profile/profile.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/screens/screens-tabs/profile/profile.page.ts ***!
  \**************************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/realtime.service */ "./src/app/services/realtime.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/network-status.service */ "./src/app/services/network-status.service.ts");
/* harmony import */ var src_app_services_days_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/days.service */ "./src/app/services/days.service.ts");










let ProfilePage = class ProfilePage {
    constructor(auth, ui, request, photo, realtime, router, network, days) {
        this.auth = auth;
        this.ui = ui;
        this.request = request;
        this.photo = photo;
        this.realtime = realtime;
        this.router = router;
        this.network = network;
        this.days = days;
        this.image = "assets/imgs/avatar.svg";
        this.score = 0;
        this.travels = 0;
        this.antiquity = "0 días";
        this.level = {
            level_id: 1,
            level_name: "BRONCE"
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.image = "assets/imgs/avatar.svg";
            if (localStorage.getItem("currentDocuments")) {
                this.currentDOcuments = JSON.parse(localStorage.getItem("currentDocuments"));
            }
            if (this.network.getNetworkStatus().connected) {
                const loader = yield this.ui.loading("Por favor espere...");
                this.request.get(`driver/documents/${this.auth.user.id}`)
                    .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const documents = res.data.documents;
                    const photo = documents.filter(d => d["document_type_id "] == 21);
                    if (photo.length > 0) {
                        this.image = photo[photo.length - 1].url;
                        this.document_id = photo[photo.length - 1].document_id;
                        const obj = {
                            id: photo[photo.length - 1].id,
                            document_id: photo[photo.length - 1].document_id,
                            "document_type ": photo[photo.length - 1]["document_type "],
                            "document_type_id ": photo[photo.length - 1]["document_type_id "],
                            url: this.image
                        };
                        if (!this.currentDOcuments) {
                            this.currentDOcuments = [];
                        }
                        if (!this.currentDOcuments.find(d => d.id == obj.id)) {
                            this.currentDOcuments.push(obj);
                        }
                        // if (localStorage.getItem("currentDocuments")) {
                        //   if (!this.currentDOcuments.find(d => d.id == obj.id)) {
                        //     this.currentDOcuments.push(obj);
                        //   }
                        // }
                    }
                    (yield loader).dismiss();
                }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log("Error", err);
                    (yield loader).dismiss();
                }));
                this.request.get(`driver/show_driver/${this.auth.user.id}`)
                    .subscribe((res) => {
                    console.log("Data", res.data);
                    this.score = res.data.score;
                    this.travels = res.data.total_services;
                    this.level = {
                        level_id: res.data.level_id,
                        level_name: res.data.level_id == 0 ? "SIN NIVEL" : res.data.level_name
                    };
                    this.auth.user.level_id = this.level.level_id;
                    this.auth.setUser(this.auth.user);
                    this.antiquity = this.days.formatDays((res.data.seniority_of_delivery));
                    console.log("Antiguedad", this.antiquity);
                    console.log("Antiguedad fecha", this.days.formatDaysWithDate(res.data.first_order_date));
                });
            }
            else {
                this.ui.showToast("Verifique su conexión");
            }
        });
    }
    logOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ui.presentAlert({
                mode: 'ios',
                header: '¿Está seguro de cerrar la sesión?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Sí',
                        handler: () => { this.auth.logOut(); }
                    }
                ]
            });
        });
    }
    goToPolicies() {
        this.router.navigateByUrl("https://zapplogistica.com/politicas/");
        // location.href = "https://zapplogistica.com/politicas/"
    }
    takePhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.network.getNetworkStatus().connected) {
                    const image = yield (yield this.photo.selectImageSource());
                    this.photo.imageSubject.subscribe((image) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (Object.keys(image).length > 0) {
                            const current_photo = this.image == "assets/imgs/avatar.svg";
                            const current_photo_url = this.image;
                            this.image = image.dataUrl;
                            const url = !current_photo ? `driver/update_documents/${this.document_id}` : `driver/documents/${this.auth.user.id}/21`;
                            const dat = new Date().getTime();
                            const name_file1 = `${dat}_${this.auth.user.id}.${image.format}`;
                            const blob_image = this.photo.dataUrlToBlob(image.dataUrl);
                            const image_to_upload = this.photo.getFileImage(image.dataUrl, name_file1, image.format);
                            let data = new FormData();
                            data.append('photo', blob_image);
                            const loader = yield this.ui.loading("Por favor espere...");
                            this.request.post(url, data).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                (yield loader).dismiss();
                                this.auth.person.photo = res.data.url;
                                this.auth.setPerson(this.auth.person);
                                const obj = {
                                    "document_type ": "Foto del conductor",
                                    "document_type_id ": 21,
                                    url: this.image
                                };
                                const v = this.currentDOcuments.find(d => d["document_type_id "] == 21);
                                const current_length = this.currentDOcuments.length;
                                if (!v) {
                                    this.currentDOcuments.push(obj);
                                }
                                else {
                                    const index = this.currentDOcuments.findIndex(d => d == v);
                                    if (index != -1) {
                                        this.currentDOcuments[index].url = this.image;
                                    }
                                }
                                if (this.auth.user.verified == 0) {
                                    const res = Math.abs(Number(this.auth.vehicles.year) - new Date().getFullYear());
                                    if (localStorage.getItem("currentDocuments")) {
                                        let length = res <= 2 ? 10 : 9;
                                        const min_length = res <= 2 ? 11 : 10;
                                        console.log("Length", this.currentDOcuments.length);
                                        if (this.currentDOcuments.length >= length) {
                                            if (current_length < min_length) {
                                                this.realtime.getStatus().update({
                                                    verified: this.auth.user.verified,
                                                    documents: 1
                                                });
                                                yield this.ui.presentAlert({
                                                    mode: 'ios',
                                                    header: '¡Ha completado su registro!',
                                                    buttons: [
                                                        {
                                                            text: 'Aceptar',
                                                            handler: () => { this.router.navigate(['tabs/home']); }
                                                        }
                                                    ]
                                                });
                                            }
                                            else {
                                            }
                                        }
                                        else {
                                            yield this.ui.presentAlert({
                                                mode: 'ios',
                                                header: 'Por favor complete sus documentos',
                                                buttons: [
                                                    {
                                                        text: 'Aceptar',
                                                        handler: () => { this.router.navigate(['tabs/documents']); }
                                                    }
                                                ]
                                            });
                                        }
                                    }
                                }
                                console.log("Este es el res", res);
                            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                (yield loader).dismiss();
                                this.image = current_photo_url;
                                this.ui.showToast("No se pudo subir la imagen");
                                console.log("Error", err);
                            }));
                        }
                    }));
                }
                else {
                    this.ui.showToast("Verifique su conexión");
                }
            }
            catch (e) {
                console.log("Error", e);
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"] },
    { type: src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_6__["RealtimeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_8__["NetworkStatusService"] },
    { type: src_app_services_days_service__WEBPACK_IMPORTED_MODULE_9__["DaysService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/screens/screens-tabs/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=screens-screens-tabs-profile-profile-module-es2015.js.map