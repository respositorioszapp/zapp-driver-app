(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-liquidation-liquidation-module"],{

/***/ "./node_modules/capacitor-blob-writer/dist/plugin.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/capacitor-blob-writer/dist/plugin.esm.js ***!
  \***************************************************************/
/*! exports provided: writeFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeFile", function() { return writeFile; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const { Filesystem } = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"];
// By choosing a chunk size which is a multiple of 3, we avoid a bug in
// Filesystem.appendFile, only on the web platform, which corrupts files by
// inserting Base64 padding characters within the file. See
// https://github.com/ionic-team/capacitor-plugins/issues/649.
const chunkSize = 3 * 128 * 1024;
function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    let i = 0;
    while (i < bytes.byteLength) {
        binary += String.fromCharCode(bytes[i]);
        i++;
    }
    return btoa(binary);
}
function append(directory, path, data) {
    if (data.size === 0) {
        return Promise.resolve();
    }
    return new Response(data.slice(0, chunkSize)).arrayBuffer().then(function (buffer) {
        return Filesystem.appendFile({
            directory,
            path,
            data: arrayBufferToBase64(buffer),
        });
    }).then(function () {
        return append(directory, path, data.slice(chunkSize));
    });
}
function writeFileViaBridge(directory, path, data, recursive) {
    // create & truncate file
    return Filesystem.writeFile({
        directory,
        path,
        recursive,
        data: '',
    }).then(function ({ uri }) {
        // write file incrementally to be enconomical with memory
        return append(directory, path, data).then(function () {
            return uri;
        });
    });
}
var writeFileViaBridge$1 = Object.freeze(writeFileViaBridge);

class BlobWriterWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super({
            name: 'BlobWriter',
            platforms: ['web']
        });
    }
    getConfig() {
        const err = new Error('Not implemented for web');
        err.code = 'NOT_IMPLEMENTED';
        return Promise.reject(err);
    }
}
const BlobWriter = new BlobWriterWeb();
Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(BlobWriter);
function writeFile(options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [{ baseUrl, authToken }, { uri }] = yield Promise.all([
                _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].BlobWriter.getConfig(),
                _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["Plugins"].Filesystem.getUri({
                    path: options.path,
                    directory: options.directory,
                }),
            ]);
            const absolutePath = uri.replace('file://', '');
            const queryString = options.recursive ? '?recursive=true' : '';
            const url = baseUrl + absolutePath + queryString;
            const { status } = yield fetch(url, {
                headers: { authorization: authToken },
                method: 'put',
                body: options.data,
            });
            if (status !== 204) {
                throw new Error('unexpected HTTP status: ' + status);
            }
            return { uri };
        }
        catch (err) {
            if (typeof options.fallback === 'function'
                ? options.fallback(err)
                : options.fallback !== false) {
                if (err.code !== 'NOT_IMPLEMENTED') {
                    console.error(err);
                }
                return writeFileViaBridge$1(options.directory, options.path, options.data, options.recursive).then(function (uri) {
                    return { uri };
                });
            }
            throw err;
        }
    });
}


//# sourceMappingURL=plugin.esm.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/liquidation/liquidation.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/liquidation/liquidation.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Liquidación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-6 ion-text-center w-50\" style=\"padding: 0 10px\" >\n      <h4 class=\"ion-text-center\">Fecha Inicio\n      </h4>\n      <ion-item class=\"input-text date\" (click)=\"init.open()\">\n        <label  >{{min_date | date:\"dd/MM/yyyy\"}} </label>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" class=\"hidden\" #init cancelText=\"Cancelar\" doneText=\"Guardar\" mode=\"ios\"\n          [max]=\"max_date\" [(ngModel)]=\"min_date\" ></ion-datetime>\n        <ion-button  fill=\"clear\" slot=\"end\" class=\"ion-no-padding ion-no-margin\"    >\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </div>\n    <div class=\"col-sm-6 ion-text-center w-50\" style=\"padding: 0 10px\">\n      <h4 class=\"ion-text-center\">Fecha Fin\n      </h4>\n      <ion-item class=\"input-text date\" (click)=\"end.open()\">\n        <label  >{{max_date | date:\"dd/MM/yyyy\" }} </label>\n        <ion-datetime class=\"input-text hidden\" displayFormat=\"DD/MM/YYYY\" #end cancelText=\"Cancelar\" doneText=\"Guardar\" mode=\"ios\"\n          [(ngModel)]=\"max_date\" ></ion-datetime>\n        <ion-button  fill=\"clear\" slot=\"end\"  class=\"ion-no-padding ion-no-margin\" >\n          <ion-icon name=\"calendar-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n    </div>\n  </div>\n  <div class=\"row ion-text-center\">\n    <ion-button (click)=\"download()\" style=\"text-align: center;\n    margin: 10px auto;\">Descargar <ion-icon name=\"arrow-down-circle-outline\"></ion-icon></ion-button>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/enums/mime-types.enum.ts":
/*!******************************************!*\
  !*** ./src/app/enums/mime-types.enum.ts ***!
  \******************************************/
/*! exports provided: MimeTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeTypes", function() { return MimeTypes; });
var MimeTypes;
(function (MimeTypes) {
    MimeTypes["Excel"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
})(MimeTypes || (MimeTypes = {}));


/***/ }),

/***/ "./src/app/screens/screens-tabs/liquidation/liquidation-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/liquidation/liquidation-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: LiquidationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidationPageRoutingModule", function() { return LiquidationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _liquidation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liquidation.page */ "./src/app/screens/screens-tabs/liquidation/liquidation.page.ts");




const routes = [
    {
        path: '',
        component: _liquidation_page__WEBPACK_IMPORTED_MODULE_3__["LiquidationPage"]
    }
];
let LiquidationPageRoutingModule = class LiquidationPageRoutingModule {
};
LiquidationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LiquidationPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/liquidation/liquidation.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/liquidation/liquidation.module.ts ***!
  \************************************************************************/
/*! exports provided: LiquidationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidationPageModule", function() { return LiquidationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _liquidation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./liquidation-routing.module */ "./src/app/screens/screens-tabs/liquidation/liquidation-routing.module.ts");
/* harmony import */ var _liquidation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liquidation.page */ "./src/app/screens/screens-tabs/liquidation/liquidation.page.ts");







let LiquidationPageModule = class LiquidationPageModule {
};
LiquidationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _liquidation_routing_module__WEBPACK_IMPORTED_MODULE_5__["LiquidationPageRoutingModule"]
        ],
        declarations: [_liquidation_page__WEBPACK_IMPORTED_MODULE_6__["LiquidationPage"]]
    })
], LiquidationPageModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/liquidation/liquidation.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/liquidation/liquidation.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy10YWJzL2xpcXVpZGF0aW9uL2xpcXVpZGF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/screens/screens-tabs/liquidation/liquidation.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/screens/screens-tabs/liquidation/liquidation.page.ts ***!
  \**********************************************************************/
/*! exports provided: LiquidationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidationPage", function() { return LiquidationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var src_app_enums_mime_types_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/enums/mime-types.enum */ "./src/app/enums/mime-types.enum.ts");
/* harmony import */ var capacitor_blob_writer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! capacitor-blob-writer */ "./node_modules/capacitor-blob-writer/dist/plugin.esm.js");











const { Filesystem, Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];




let LiquidationPage = class LiquidationPage {
    constructor(transfer, file, auth, http, ui, iab, fileOpener, photo) {
        this.transfer = transfer;
        this.file = file;
        this.auth = auth;
        this.http = http;
        this.ui = ui;
        this.iab = iab;
        this.fileOpener = fileOpener;
        this.photo = photo;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.min_date = this.formatDated(y);
        // console.log("Fecha min", this.min_date)
        // this.max_date = this.formatDated(maxf);
        const today = new Date();
        //This method is for get the first day of a week
        const firstDay = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfWeek"])(today);
        this.min_date = this.formatDated(firstDay);
        this.max_date = this.formatDated(today);
    }
    formatDated(date) {
        let d = new Date(date), day = '' + d.getDate(), month = '' + (d.getMonth() + 1), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        console.log("Fecha", [year, month, day].join('-'));
        return [year, month, day].join('-');
    }
    download() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Download a file:
            //exports_to_excel/liquidation_of_orders_driver?driver_id=6&start_date=2020/12/20&end_date=2020/12/22
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].BASEURL + "exports_to_excel/liquidation_of_orders_of_driver?driver_id=" + this.auth.user.id
                + "&start_date=" + this.min_date.split("T")[0] + "T00:00:00" + "&end_date=" + this.max_date.split("T")[0] + "T23:59:00";
            const loader = yield this.ui.loading("Por favor espere...");
            this.http.get(url, { responseType: 'blob' }).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    console.log("File", res);
                    const file_name = "Liquidacion" + new Date().getTime() + ".xlsx";
                    // const base64 = await this.photo.blobToDataUrl(res) as string;
                    (yield loader).dismiss();
                    //Save File
                    // const savedFile = await Filesystem.writeFile({
                    //   path: file_name,
                    //   data: base64,
                    //   directory: FilesystemDirectory.Documents
                    // })
                    const { uri } = yield Object(capacitor_blob_writer__WEBPACK_IMPORTED_MODULE_14__["writeFile"])({
                        path: file_name,
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["FilesystemDirectory"].Data,
                        // data must be a Blob (creating a Blob which wraps other data types
                        // is trivial)
                        data: res,
                        // create intermediate directories if they don't already exist
                        // default: false
                        recursive: true,
                        // fallback to Filesystem.writeFile instead of throwing an error
                        // (you may also specify a unary callback, which takes an Error and returns
                        // a boolean)
                        // default: true
                        fallback: (err) => {
                            return err != undefined;
                        }
                    });
                    console.log("Saved File", uri);
                    //Save the file url to show it
                    const path = uri;
                    //Set the mime type for excel
                    const mimeType = src_app_enums_mime_types_enum__WEBPACK_IMPORTED_MODULE_13__["MimeTypes"].Excel.toString();
                    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Capacitor"].platform !== 'web') {
                        this.fileOpener.open(path, mimeType)
                            .then(() => { console.log("File is opened"); })
                            .catch((err) => { console.log("Error opening file", err); });
                    }
                }
                catch (e) {
                    (yield loader).dismiss();
                    this.ui.showToast("Error", e);
                }
                this.ui.showToast("Descargado");
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                (yield loader).dismiss();
                this.ui.showToast("El mensajero no tiene liquidación en este rango");
            }));
        });
    }
};
LiquidationPage.ctorParameters = () => [
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_9__["UiService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"] },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_12__["PhotoService"] }
];
LiquidationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-liquidation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./liquidation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/liquidation/liquidation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./liquidation.page.scss */ "./src/app/screens/screens-tabs/liquidation/liquidation.page.scss")).default]
    })
], LiquidationPage);



/***/ })

}]);
//# sourceMappingURL=screens-screens-tabs-liquidation-liquidation-module-es2015.js.map