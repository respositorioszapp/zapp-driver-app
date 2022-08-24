(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-documents-documents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/documents/documents.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/documents/documents.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"warning\">\n  <ion-button fill=\"clear\" (click)=\"back()\" style=\"position: absolute;\n  left: 0px;\n  padding: 10px;\">\n    <ion-icon name=\"arrow-back-outline\" slot=\"icon-only\"></ion-icon>\n  </ion-button>\n  <div style=\"position: relative;\">\n    <div class=\"ion-text-center margin-top-15vh ion-padding-bottom\" style=\"width: 60%;\n    margin: auto;\n    position: absolute;\n    left: 0;\n    right: 0;\">\n      <img src=\"assets/imgs/logo-morado.png\" width=\"100\">\n    </div>\n  </div>\n  <ion-card style=\"margin-top:50px\">\n    <ion-card-header *ngIf=\"!getDocumentsComplete()\">\n      <ion-card-subtitle class=\"ion-text-center\">\n        <h2><span class=\"black-color-text\">Completa tu registro</span></h2>\n        <br>\n        Faltan <ion-badge color=\"primary\">{{getDocumentsAlreadyFullFill()}}</ion-badge> documentos\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <!-- <ion-list>\n        <ion-item class=\"ion-text-center\" >\n\n        </ion-item>\n      </ion-list> -->\n      <ion-grid>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Cédula</ion-label>\n          </div>\n          <ion-col size=\"6\" *ngFor=\"let item of filter(imgs,0,1);let i = index\">\n\n            <img [src]=\"item.url\" alt=\"\" srcset=\"\" style=\"width: 150px;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(item)\">\n            <ion-label>{{i%2==0 ? 'Frontal': 'Trasera'}}</ion-label>\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"item.loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Tarjeta de propiedad</ion-label>\n          </div>\n          <ion-col size=\"6\" *ngFor=\"let item of filter(imgs,2,3);let i = index\">\n\n            <img [src]=\"item.url\" alt=\"\" srcset=\"\" style=\"width: 150px;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(item)\">\n            <ion-label>{{i%2==0 ? 'Frontal': 'Trasera'}}</ion-label>\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"item.loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Licencia de conducción</ion-label>\n          </div>\n          <ion-col size=\"6\" *ngFor=\"let item of filter(imgs,4,5);let i = index\">\n\n            <img [src]=\"item.url\" alt=\"\" srcset=\"\" style=\"width: 150px;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(item)\">\n            <ion-label>{{i%2==0 ? 'Frontal': 'Trasera'}}</ion-label>\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"item.loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Fotos del vehículo</ion-label>\n          </div>\n\n          <ion-col size=\"6\" *ngFor=\"let item of filter(imgs,8,9);let i = index\">\n\n            <img [src]=\"item.url\" alt=\"\" srcset=\"\" style=\"width: 150px;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(item)\">\n            <ion-label>{{i%2==0 ? 'Frontal': 'Trasera'}}</ion-label>\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"item.loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">SOAT</ion-label>\n          </div>\n          <ion-col size=\"12\">\n\n            <img [src]=\"imgs[6].url\" alt=\"\" srcset=\"\" style=\"width: 100%;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(imgs[6])\">\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"imgs[6].loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Tecnomecánica</ion-label>\n          </div>\n          <ion-col size=\"12\">\n\n            <img [src]=\"imgs[7].url\" alt=\"\" srcset=\"\" style=\"width: 100%;\n          height: 150px;\n          text-align: center;\n          margin: auto;\" (click)=\"takePhoto(imgs[7])\">\n            <ion-progress-bar type=\"indeterminate\" *ngIf=\"imgs[7].loading\"></ion-progress-bar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"div_category\">\n            <ion-label class=\"ion-text-uppercase ion-text-justify\">Otros</ion-label>\n          </div>\n          <ng-container *ngIf=\"others.length > 0; else elseTemp\">\n            <ion-row>\n              <ion-col [size]=\"others.length == 1 ? '12':'6'\" *ngFor=\"let item of others\" (click)=\"updateImage(item)\">\n                <ion-img [src]=\"item.url\" style=\"width:100%;height: 100px;\"></ion-img>\n                <ion-label>{{item[\"document_type \"]}}</ion-label>\n              </ion-col>\n              <ion-button fill=\"outline\" color=\"primary\" expand=\"block\" mode=\"ios\" class=\"grey-color\" (click)=\"getFile()\" *ngIf=\"!getOtherSuccesfull()\">\n                <ion-icon name=\"add-circle-outline\" slot=\"icon-only\" style=\"font-size: 3m;\"></ion-icon>\n              </ion-button>\n            </ion-row>\n            \n          </ng-container>\n          <ng-template #elseTemp>\n            <ion-col size=\"12\">\n              <ion-button fill=\"outline\" color=\"primary\" expand=\"block\" mode=\"ios\" class=\"grey-color\"\n                (click)=\"getFile()\">\n                <ion-icon name=\"add-circle-outline\" slot=\"icon-only\" style=\"font-size: 3m;\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ng-template>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/screens/screens-tabs/documents/documents-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/documents/documents-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: DocumentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageRoutingModule", function() { return DocumentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents.page */ "./src/app/screens/screens-tabs/documents/documents.page.ts");




const routes = [
    {
        path: '',
        component: _documents_page__WEBPACK_IMPORTED_MODULE_3__["DocumentsPage"]
    }
];
let DocumentsPageRoutingModule = class DocumentsPageRoutingModule {
};
DocumentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DocumentsPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/documents/documents.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/screens/screens-tabs/documents/documents.module.ts ***!
  \********************************************************************/
/*! exports provided: DocumentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageModule", function() { return DocumentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documents-routing.module */ "./src/app/screens/screens-tabs/documents/documents-routing.module.ts");
/* harmony import */ var _documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documents.page */ "./src/app/screens/screens-tabs/documents/documents.page.ts");







let DocumentsPageModule = class DocumentsPageModule {
};
DocumentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentsPageRoutingModule"]
        ],
        declarations: [_documents_page__WEBPACK_IMPORTED_MODULE_6__["DocumentsPage"]]
    })
], DocumentsPageModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/documents/documents.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/screens/screens-tabs/documents/documents.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy10YWJzL2RvY3VtZW50cy9kb2N1bWVudHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/screens/screens-tabs/documents/documents.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/screens/screens-tabs/documents/documents.page.ts ***!
  \******************************************************************/
/*! exports provided: DocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPage", function() { return DocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_screens_forms_other_documents_other_documents_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/screens/forms/other-documents/other-documents.page */ "./src/app/screens/forms/other-documents/other-documents.page.ts");
/* harmony import */ var src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/realtime.service */ "./src/app/services/realtime.service.ts");
/* harmony import */ var _services_network_status_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/network-status.service */ "./src/app/services/network-status.service.ts");











let DocumentsPage = class DocumentsPage {
    constructor(photo, auth, request, ui, router, loadingController, realtime, network) {
        this.photo = photo;
        this.auth = auth;
        this.request = request;
        this.ui = ui;
        this.router = router;
        this.loadingController = loadingController;
        this.realtime = realtime;
        this.network = network;
        this.imgs = [{
                id: 15,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Cédula frontal",
            },
            {
                id: 16,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Cedula trasera",
            },
            {
                id: 17,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Tarjeta de propiedad frontal",
            },
            {
                id: 18,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Tarjeta de propiedad trasera",
            },
            {
                id: 19,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Licencia de conduccion frontal",
            },
            {
                id: 20,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Licencia de conduccion trasera",
            },
            {
                id: 26,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Soat"
            },
            {
                id: 27,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Tecnomecanica",
            },
            {
                id: 28,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Foto del vehiculo frontal",
            },
            {
                id: 29,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Foto del vehiculo trasera",
            },];
        this.others = [
            {
                id: 32,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Recibo Servicio público",
            },
            {
                id: 33,
                url: "assets/imgs/img-default.jpg",
                format: "",
                document_type: "Hoja de vida",
            }
        ];
        this.documents_verified = false;
    }
    filter(array, start, end) {
        return array.filter((d, i) => i >= start && i <= end);
    }
    getDocumentsComplete() {
        const res = Math.abs(Number(this.auth.vehicles.year) - new Date().getFullYear());
        if (res > 2)
            return this.imgs.every(i => i.url && i.url != "assets/imgs/img-default.jpg");
        else {
            const ings = this.imgs.filter(i => i.id != 27);
            return ings.every(i => i.url && i.url != "assets/imgs/img-default.jpg");
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            this.imgs = [{
                    id: 15,
                    url: "assets/imgs/img-default.jpg",
                    format: "",
                    document_type: "Cédula frontal",
                },
                {
                    id: 16,
                    url: "assets/imgs/img-default.jpg",
                    format: "",
                    document_type: "Cedula trasera",
                },
                {
                    id: 17,
                    url: "assets/imgs/img-default.jpg",
                    format: "",
                    document_type: "Tarjeta de propiedad frontal",
                },
                {
                    id: 18,
                    url: "assets/imgs/img-default.jpg",
                    format: "",
                    document_type: "Tarjeta de propiedad trasera",
                },
                {
                    id: 19,
                    url: "assets/imgs/img-default.jpg",
                    format: "",
                    document_type: "Licencia de conduccion frontal",
                },
                {
                    id: 20,
                    url: "assets/imgs/img-default.jpg",
                    format: "",
                    document_type: "Licencia de conduccion trasera",
                },
                {
                    id: 26,
                    url: "assets/imgs/img-default.jpg",
                    format: "",
                    document_type: "Soat"
                },
                {
                    id: 27,
                    url: "assets/imgs/img-default.jpg",
                    format: "",
                    document_type: "Tecnomecanica",
                },
                {
                    id: 28,
                    url: "assets/imgs/img-default.jpg",
                    format: "",
                    document_type: "Foto del vehiculo frontal",
                },
                {
                    id: 29,
                    url: "assets/imgs/img-default.jpg",
                    format: "",
                    document_type: "Foto del vehiculo trasera",
                },];
            if (this.network.getNetworkStatus().connected) {
                const loader = yield this.loadingController.create({ message: "Por favor espere..." });
                yield loader.present();
                this.request.get(`driver/documents/${this.auth.user.id}`)
                    .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const documents = res.data.documents;
                    console.log("Documents", documents);
                    this.currentDocuments = documents;
                    localStorage.setItem("currentDocuments", JSON.stringify(this.currentDocuments));
                    this.imgs = this.imgs.map(img => {
                        const id = documents.filter(d => {
                            return d["document_type_id "] == img.id;
                        });
                        const other = documents.filter(d => {
                            return d["document_type_id "] == 32 || d["document_type_id "] == 33;
                        });
                        this.others = other;
                        if (id.length > 0) {
                            console.log("Id", id);
                            const photo = id[id.length - 1].url;
                            const document_id = id[id.length - 1].document_id;
                            return Object.assign(Object.assign({}, img), { url: photo, document_id });
                        }
                        return img;
                    });
                    (yield loader).dismiss();
                }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    (yield loader).dismiss();
                }));
                this.request.get(`driver/documents_verified/${this.auth.user.id}`).subscribe(res => {
                    this.documents_verified = true;
                }, err => {
                    this.documents_verified = false;
                });
            }
            else {
                this.ui.showToast("Verifique su conexión");
            }
        });
    }
    back() {
        this.router.navigate(['/tabs/profile']);
    }
    getDocumentsAlreadyFullFill() {
        const res = Math.abs(Number(this.auth.vehicles.year) - new Date().getFullYear());
        if (res <= 2) {
            const images = this.imgs.filter(i => i.id != 27);
            return images.filter(i => i.url == "assets/imgs/img-default.jpg").length;
        }
        return (this.imgs
            .filter(i => i.url == "assets/imgs/img-default.jpg").length);
    }
    takePhoto(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.network.getNetworkStatus().connected) {
                    yield (yield this.photo.selectImageSource());
                    this.subscription = this.photo.imageSubject.subscribe((image) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (Object.keys(image).length > 0) {
                            const loading = yield this.ui.loading("Por favor espere...");
                            console.log("Item", item);
                            const current_photo = item.url == "assets/imgs/img-default.jpg";
                            const current_photo_url = item.url;
                            item.url = image.dataUrl;
                            item.format = image.format;
                            item.loading = "yes";
                            const url = !current_photo ? `driver/update_documents/${item.document_id}` : `driver/documents/${this.auth.user.id}/${item.id}`;
                            const dat = new Date().getTime();
                            const name_file1 = `${dat}_${this.auth.user.id}.${item.format}`;
                            const blob_image = this.photo.dataUrlToBlob(item.url);
                            const image_to_upload = this.photo.getFileImage(item.url, name_file1, item.format);
                            let data = new FormData();
                            if (image_to_upload instanceof File) {
                                console.log("Image", JSON.stringify(image_to_upload));
                                data.append('photo', blob_image);
                                console.log(" Form Data", data);
                                this.request.post(url, data, false, {
                                    enctype: 'multipart/form-data'
                                })
                                    .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    (yield loading).dismiss();
                                    this.subscription.unsubscribe();
                                    console.log("Res", res);
                                    item.loading = undefined;
                                    console.log("Este es el res", res);
                                    if (!item.document_id) {
                                        item.document_id = res.data.id;
                                    }
                                    if (!this.currentDocuments.find(d => d.id == item.id)) {
                                        this.currentDocuments.push(item);
                                        localStorage.setItem("currentDocuments", JSON.stringify(this.currentDocuments));
                                    }
                                    if (this.getDocumentsComplete()) {
                                        const documents_profile = this.currentDocuments.find(d => d["document_type_id "] == 21);
                                        if (documents_profile) {
                                            if (!this.documents_verified) {
                                                this.realtime.getStatus().update({
                                                    verified: this.auth.user.verified,
                                                    documents: 1
                                                });
                                                this.ui.presentAlert({
                                                    mode: 'ios',
                                                    header: "Ha completado su registro exitosamente",
                                                    buttons: [
                                                        {
                                                            text: 'Aceptar',
                                                            cssClass: 'secondary',
                                                            handler: () => {
                                                                this.router.navigate(['/tabs/home']);
                                                                console.log('cerrar');
                                                            }
                                                        }
                                                    ]
                                                });
                                            }
                                        }
                                        else {
                                            this.ui.presentAlert({
                                                mode: 'ios',
                                                header: "Ha completado los registros del vehiculo, falta la foto de perfil",
                                                buttons: [
                                                    {
                                                        text: 'Aceptar',
                                                        cssClass: 'secondary',
                                                        handler: () => {
                                                            this.router.navigate(['/tabs/profile']);
                                                            console.log('cerrar');
                                                        }
                                                    }
                                                ]
                                            });
                                        }
                                    }
                                }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    (yield loading).dismiss();
                                    this.subscription.unsubscribe();
                                    item.loading = undefined;
                                    item.url = current_photo_url;
                                    console.log("Error", err);
                                    // this.ui.showToast("Archivo" + (image_to_upload && image_to_upload != null) ? image_to_upload.name : 'No existe')
                                    try {
                                        if (err.status == 400) {
                                            let message = err.error ? err.error.messages ? err.error.messages : 'Hubo un error y no hay message' : "Bad Request";
                                            message + "<br> " + JSON.stringify(err);
                                            this.ui.presentAlert({
                                                mode: 'ios',
                                                header: "Hubo un error",
                                                message,
                                                buttons: [
                                                    {
                                                        text: 'Aceptar',
                                                        cssClass: 'secondary',
                                                        handler: () => {
                                                        }
                                                    }
                                                ]
                                            });
                                            return;
                                        }
                                        if (err.status == 500) {
                                            this.ui.presentAlert({
                                                mode: 'ios',
                                                header: "Hubo un error",
                                                message: "En el servidor",
                                                buttons: [
                                                    {
                                                        text: 'Aceptar',
                                                        cssClass: 'secondary',
                                                        handler: () => {
                                                        }
                                                    }
                                                ]
                                            });
                                            return;
                                        }
                                        this.ui.presentAlert({
                                            mode: 'ios',
                                            header: "Hubo un error no es el error",
                                            message: JSON.stringify(err),
                                            buttons: [
                                                {
                                                    text: 'Aceptar',
                                                    cssClass: 'secondary',
                                                    handler: () => {
                                                    }
                                                }
                                            ]
                                        });
                                    }
                                    catch (e) {
                                        this.ui.presentAlert({
                                            mode: 'ios',
                                            header: "Hubo un error de código",
                                            message: e,
                                            buttons: [
                                                {
                                                    text: 'Aceptar',
                                                    cssClass: 'secondary',
                                                    handler: () => {
                                                    }
                                                }
                                            ]
                                        });
                                    }
                                }));
                            }
                            else {
                                this.ui.showToast("Debe ser un archivo");
                            }
                        }
                    }));
                }
                else {
                    this.ui.showToast("Verifique su conexión");
                }
            }
            catch (err) {
                console.log("Error", err);
            }
        });
    }
    getOtherSuccesfull() {
        return this.others.length == 2;
    }
    updateImage(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.network.getNetworkStatus().connected) {
                const modal = yield this.ui.presentModal(src_app_screens_forms_other_documents_other_documents_page__WEBPACK_IMPORTED_MODULE_8__["OtherDocumentsPage"], { img: item, others: this.others });
                const m = yield modal.onDidDismiss();
                this.ionViewWillEnter();
            }
            else {
                this.ui.showToast("Verifique su conexión");
            }
        });
    }
    getFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.network.getNetworkStatus().connected) {
                const modal = yield this.ui.presentModal(src_app_screens_forms_other_documents_other_documents_page__WEBPACK_IMPORTED_MODULE_8__["OtherDocumentsPage"], { documents: this.imgs, others: this.others });
                const m = yield modal.onDidDismiss();
                this.ionViewWillEnter();
            }
            else {
                this.ui.showToast("Verifique su conexión");
            }
        });
    }
};
DocumentsPage.ctorParameters = () => [
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: src_app_services_realtime_service__WEBPACK_IMPORTED_MODULE_9__["RealtimeService"] },
    { type: _services_network_status_service__WEBPACK_IMPORTED_MODULE_10__["NetworkStatusService"] }
];
DocumentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-documents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./documents.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/documents/documents.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./documents.page.scss */ "./src/app/screens/screens-tabs/documents/documents.page.scss")).default]
    })
], DocumentsPage);



/***/ })

}]);
//# sourceMappingURL=screens-screens-tabs-documents-documents-module-es2015.js.map