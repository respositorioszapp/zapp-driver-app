(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~screens-forms-other-documents-other-documents-module~screens-screens-tabs-documents-documents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/other-documents/other-documents.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/other-documents/other-documents.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" style=\"position: relative;\" mode=\"ios\">\n    <ion-title style=\"position: absolute; left: 5px;bottom:14px\">Otros\n    </ion-title>\n    <ion-button (click)=\"dismiss()\" style=\"position: absolute; right: 5px;bottom:5px\">\n      <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"!img; else elseTemplate\">\n    <form [formGroup]=\"document_information\">\n      <ion-item lines=\"none\" class=\"input-text ion-margin-top\">\n        <ion-select placeholder=\"Tipo de documento\" formControlName=\"document_type\" style=\"display: contents;\" required\n          [selectedText]=\"document.name\">\n          <ion-select-option *ngFor=\"let item of documents\" [value]=\"item.id\">{{item.name }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </form>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <ion-img [src] = \"img.url\" style=\"width: 100%;height: 300px;\" (click)=\"getFile()\">\n\n    </ion-img>\n  </ng-template>\n\n\n  <ion-button (click)=\"getFile()\" expand=\"block\" mode=\"ios\" color=\"primary\" class=\"ion-margin-bottom\">\n    Subir documento\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/screens/forms/other-documents/other-documents.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/screens/forms/other-documents/other-documents.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvb3RoZXItZG9jdW1lbnRzL290aGVyLWRvY3VtZW50cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/screens/forms/other-documents/other-documents.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/screens/forms/other-documents/other-documents.page.ts ***!
  \***********************************************************************/
/*! exports provided: OtherDocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDocumentsPage", function() { return OtherDocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/network-status.service */ "./src/app/services/network-status.service.ts");








let OtherDocumentsPage = class OtherDocumentsPage {
    constructor(ui, fb, photo, auth, request, network) {
        this.ui = ui;
        this.fb = fb;
        this.photo = photo;
        this.auth = auth;
        this.request = request;
        this.network = network;
        this.document = {
            id: "",
            name: ""
        };
        this.document_information = this.fb.group({
            document_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.other_documents = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.img) {
                this.document_information.setValue({
                    document_type: this.img["document_type_id "]
                });
            }
            else {
                if (this.network.getNetworkStatus().connected) {
                    const loader = yield this.ui.loading("Por favor espere...");
                    this.request.get('list/attributes?parameter_id=8').subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.documents = res.data;
                        (yield loader).dismiss();
                    }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        (yield loader).dismiss();
                    }));
                }
                else {
                    this.ui.showToast("Verifique su conexión");
                }
            }
        });
    }
    dismiss() {
        this.ui.dismiss();
    }
    takePhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.network.getNetworkStatus().connected) {
                    yield (yield this.photo.selectImageSource());
                    this.photo.imageSubject.subscribe(image => {
                        const url = `driver/documents/${this.auth.user.id}/32`;
                        const dat = new Date().getTime();
                        const name_file1 = `${dat}_${this.auth.user.id}.${image.format}`;
                        const blob_image = this.photo.dataUrlToBlob(image.url);
                        const image_to_upload = this.photo.getFileImage(image.url, name_file1, image.format);
                        let data = new FormData();
                        data.append('photo', blob_image);
                        this.request.post(url, data).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            console.log("Este es el res", res);
                            this.ui.showToast("Documento subido", () => {
                                this.dismiss();
                            });
                        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (err.status == 400) {
                                const error = JSON.stringify(err.error);
                                const message = err.error.messages ? err.error.messages[0].length == 1 ? err.error.messages : err.error.messages[0] : 'No hay mensaje';
                                yield this.ui.presentAlert({
                                    mode: 'ios',
                                    header: message,
                                    buttons: [
                                        {
                                            text: 'Aceptar',
                                            handler: () => { }
                                        }
                                    ]
                                });
                            }
                        }));
                    });
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
    getFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.document_information.valid) {
                const { document_type } = this.document_information.value;
                if (this.network.getNetworkStatus().connected) {
                    yield (yield this.photo.selectImageSource());
                    this.photo.imageSubject.subscribe((image) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (this.img) {
                            this.img.url = image.dataUrl;
                        }
                        const url = this.img ? `driver/update_documents/${this.img.document_id}` : `driver/documents/${this.auth.user.id}/${document_type}`;
                        let data = new FormData();
                        const dat = new Date().getTime();
                        const name_file1 = `${dat}_${this.auth.user.id}.${image.format}`;
                        const blob_image = this.photo.dataUrlToBlob(image.dataUrl);
                        const image_to_upload = this.photo.getFileImage(image.dataUrl, name_file1, image.format);
                        data.append('photo', blob_image);
                        const loader = yield this.ui.loading("Por favor espere...");
                        this.request.post(url, data).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            (yield loader).dismiss();
                            if (this.img) {
                                const find = this.others.findIndex(o => o.document_id == this.img);
                                if (find != -1) {
                                    this.others[find] = this.img;
                                }
                            }
                            else {
                                this.others.push({
                                    url: image.dataUrl,
                                });
                            }
                            yield this.ui.presentAlert({
                                mode: 'ios',
                                header: '¡Archivo subido con éxito!',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        handler: () => { }
                                    }
                                ]
                            });
                        }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            (yield loader).dismiss();
                            if (err.status == 400) {
                                const error = JSON.stringify(err.error);
                                const message = err.error.messages ? err.error.messages[0].length == 1 ? err.error.messages : err.error.messages[0] : 'No hay mensaje';
                                yield this.ui.presentAlert({
                                    mode: 'ios',
                                    header: message,
                                    buttons: [
                                        {
                                            text: 'Aceptar',
                                            handler: () => { }
                                        }
                                    ]
                                });
                            }
                            console.log("Err", err);
                        }));
                    }));
                }
                else {
                    this.ui.showToast("Verifique su conexión");
                }
            }
            else {
                this.ui.showToast("Debe escoger un tipo de documento");
            }
        });
    }
};
OtherDocumentsPage.ctorParameters = () => [
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] },
    { type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OtherDocumentsPage.prototype, "documents", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OtherDocumentsPage.prototype, "others", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OtherDocumentsPage.prototype, "img", void 0);
OtherDocumentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-other-documents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./other-documents.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/other-documents/other-documents.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./other-documents.page.scss */ "./src/app/screens/forms/other-documents/other-documents.page.scss")).default]
    })
], OtherDocumentsPage);



/***/ })

}]);
//# sourceMappingURL=default~screens-forms-other-documents-other-documents-module~screens-screens-tabs-documents-documents-module-es2015.js.map