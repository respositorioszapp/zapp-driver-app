(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-screens-tabs-history-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/history/history.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/history/history.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"warning\">\n  <ion-card style=\"padding: 0;min-height: 350px;\">\n    <ion-card-content style=\"padding: 0\">\n      <ion-title class=\"ion-text-center\">Historial</ion-title>\n      <ng-container *ngIf=\"orders.length > 0; else elseTemplateOrder\">\n        <ion-card *ngFor=\"let item of orders\" style=\"margin-bottom: 10px;\" >\n          <ion-card-content (click)=\"viewDetail(item)\">\n\n            <div style=\"width:100%;display: flex;\">\n              <div class=\"w-50\">\n                ORDEN #{{item.id}}\n              </div>\n              <div style=\"width: 50%;text-align:right\">\n                \n                {{ item.date | dateLocal | titlecase }}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\" \">Tipo de Servicio :  </p>\n              </div>\n              <div style=\"width: 50%;\">\n                <strong>{{item.service_type}}</strong>\n                \n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\" \"> Ciudad : </p>\n                \n              </div>\n              <div style=\"width: 50%;   \">\n                <strong>{{item.city}}</strong>\n                \n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\"\"> Cantidad : </p>\n              </div>\n              <div class=\"w-50\">\n                <strong>{{item.details.length}}</strong>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\"\"> Recorrido : </p>\n              </div>\n              <div style=\"width: 50%; \">\n                <strong>{{item.round_trip ==1 ? 'Ida y Vuelta': 'Ida'}}</strong>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\"\"> Valor declarado : </p>\n              </div>\n              <div class=\"w-50\">\n                <strong>{{item.declared_value}}</strong>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"w-50\">\n                <p class=\"\"> Tipo de accesorio : </p>\n              </div>\n              <div class=\"w-50\">\n                <strong>{{item.accessory_type}}</strong>\n              </div>\n            </div>\n            \n            <div class=\"row\" *ngIf=\"item.service_type_id == 3\">\n              <div class=\"w-50\">\n                <p class=\"\"> Número de horas : </p>\n              </div>\n              <div style=\"width: 50%;    \">\n                <strong>{{item.number_hours}}</strong>\n              </div>\n            </div>\n            <ion-item lines=\"none\">\n              <ion-button fill=\"clear\" size=\"small\" slot=\"start\"   style=\"\"  >\n                <ng-container *ngIf=\"item.score_service; else elseTemplate\">\n                  {{item.score_service ? item.score_service: 0 }}<ion-icon name=\"star\" class=\"text-yellow\"  ></ion-icon>  \n                </ng-container>\n                <ng-template #elseTemplate>\n                  Sin calificar <ion-icon name=\"star\" ></ion-icon>   \n                </ng-template>\n                \n                 \n              </ion-button>\n              <ion-button size=\"small\" [class]=\"store_states[item.status_order].class\" slot=\"end\">\n                {{store_states[item.status_order].message}}\n              </ion-button>\n            </ion-item>\n            \n            \n          </ion-card-content>\n         \n        </ion-card>\n        <ion-card *ngIf=\"loading\">\n          <ion-card-content >\n\n            <div style=\"width:100%;display: flex;\">\n              <div class=\"w-50\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <div style=\"width: 50%;text-align:right\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n            </div>\n            <div style=\"display: flex;margin-top: 5px;\n            margin-bottom: 5px;\">\n              <div class=\"w-50\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <div style=\"width: 50%; margin-left: 11px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n            </div>\n            <div style=\"display: flex;margin-top: 5px;\n            margin-bottom: 5px;\">\n              <div class=\"w-50\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <div style=\"width: 50%;    margin-left: 11px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n            </div>\n            <div style=\"display: flex;margin-top: 5px;\n            margin-bottom: 5px;\">\n              <div class=\"w-50\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n              <div style=\"width: 50%;    margin-left: 11px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n              </div>\n            </div>\n            \n          </ion-card-content>\n        </ion-card>\n        <ion-infinite-scroll  (ionInfinite)=\"loadData($event)\" >\n          <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\">\n          </ion-infinite-scroll-content>\n          \n        </ion-infinite-scroll>\n        \n      </ng-container>\n      <ng-template #elseTemplateOrder>\n        <div style=\"position: relative;height: 200px;\" *ngIf=\"orders.length == 0;\">\n          <h3 class=\"ion-text-center \" style=\"    font-size: 1.5em;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        left: 0;\n        text-align: center;\n        margin: auto;\n        height: 40px;\n    \">No ha realizado ningún viaje</h3>\n        </div>\n\n      </ng-template>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/screens/screens-tabs/history/history-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/screens/screens-tabs/history/history-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "./src/app/screens/screens-tabs/history/history.page.ts");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/history/history.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/screens/screens-tabs/history/history.module.ts ***!
  \****************************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "./src/app/screens/screens-tabs/history/history-routing.module.ts");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/screens/screens-tabs/history/history.page.ts");
/* harmony import */ var src_app_modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/aplication-pipe-module/aplication-pipe-module.module */ "./src/app/modules/aplication-pipe-module/aplication-pipe-module.module.ts");








let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"],
            src_app_modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_7__["AplicationPipeModuleModule"]
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/screens/screens-tabs/history/history.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/screens/screens-tabs/history/history.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-yellow {\n  color: #c6c73a;\n}\n\n.button-green {\n  --background: green;\n  color: white;\n}\n\n.text-green {\n  color: green;\n}\n\n.button-red {\n  --background: red;\n  color: white;\n}\n\n.text-red {\n  color: red;\n}\n\n.button-gray {\n  --background: #CE4257;\n  color: #CE4257;\n}\n\n.button-cancel {\n  --background: #95B2B0;\n  color: #95B2B0;\n}\n\n.button-dark {\n  --background: #0e0f0f;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9zY3JlZW5zLXRhYnMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9zY3JlZW5zLXRhYnMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL3NjcmVlbnMtdGFicy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQteWVsbG93e1xuICAgIGNvbG9yOiAjYzZjNzNhO1xufVxuXG4uYnV0dG9uLWdyZWVuIHtcbiAgICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHQtZ3JlZW57XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dC1yZWR7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmJ1dHRvbi1ncmF5IHtcbiAgICAtLWJhY2tncm91bmQ6ICNDRTQyNTc7XG4gICAgY29sb3I6ICNDRTQyNTc7XG59XG5cbi5idXR0b24tY2FuY2VsIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5NUIyQjA7XG4gICAgY29sb3I6ICM5NUIyQjA7XG59XG5cbi5idXR0b24tZGFya3tcbiAgICAtLWJhY2tncm91bmQ6ICMwZTBmMGY7XG4gICAgY29sb3I6IHdoaXRlO1xufSIsIi50ZXh0LXllbGxvdyB7XG4gIGNvbG9yOiAjYzZjNzNhO1xufVxuXG4uYnV0dG9uLWdyZWVuIHtcbiAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dC1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmJ1dHRvbi1yZWQge1xuICAtLWJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dC1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYnV0dG9uLWdyYXkge1xuICAtLWJhY2tncm91bmQ6ICNDRTQyNTc7XG4gIGNvbG9yOiAjQ0U0MjU3O1xufVxuXG4uYnV0dG9uLWNhbmNlbCB7XG4gIC0tYmFja2dyb3VuZDogIzk1QjJCMDtcbiAgY29sb3I6ICM5NUIyQjA7XG59XG5cbi5idXR0b24tZGFyayB7XG4gIC0tYmFja2dyb3VuZDogIzBlMGYwZjtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/screens/screens-tabs/history/history.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/screens/screens-tabs/history/history.page.ts ***!
  \**************************************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/screens/forms/view-detail/view-detail.page */ "./src/app/screens/forms/view-detail/view-detail.page.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/network-status.service */ "./src/app/services/network-status.service.ts");








let HistoryPage = class HistoryPage {
    constructor(ui, request, auth, router, network) {
        this.ui = ui;
        this.request = request;
        this.auth = auth;
        this.router = router;
        this.network = network;
        this.orders = [];
        this.image = "assets/imgs/avatar.svg";
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.store_states = {
            25: {
                message: "Finalizada",
                state: 25,
                class: "button-green"
            },
            31: {
                message: "Cancelada",
                state: 31,
                color: "button-cancel"
            },
            36: {
                message: "Cancelada por mensajero",
                state: 36,
                color: "button-gray "
            },
            48: {
                message: "Orden no efectiva",
                state: 48,
                color: "button-dark"
            }
        };
        this.allLoaded = false;
        this.dataParams = {
            total: 0,
            per_page: 5,
            page: 1,
            filters: []
        };
        this.nextPage = "";
        this.to = 0;
        this.loadedText = "";
        this.loading = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = this.auth.user;
            this.dataParams.page = 1;
            if (this.network.getNetworkStatus().connected) {
                const loader = yield this.ui.loading("Por favor espere...");
                this.request
                    .get(`driver/history_services/${this.auth.user.id}?per_page=${this.dataParams.per_page}&page=${this.dataParams.page}`)
                    .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    (yield loader).dismiss();
                    console.log("Res", res.data.data);
                    this.orders = res.data.data;
                    this.to = res.data.to;
                }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    (yield loader).dismiss();
                    this.orders = [];
                }));
            }
            else {
                this.ui.showToast("Verifique su conexión");
            }
        });
    }
    viewDetail(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.network.getNetworkStatus().connected) {
                if (order.status_order == 23) {
                    yield this.ui.presentAlert({
                        mode: 'ios',
                        header: '¿Quieres iniciar el viaje?',
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
                                handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    const modal = yield this.ui.presentModal(src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_3__["ViewDetailPage"], { order });
                                    const m = yield modal.onDidDismiss();
                                    this.dataParams.page = 1;
                                    this.ionViewWillEnter();
                                })
                            }
                        ]
                    });
                }
                else {
                    const modal = yield this.ui.presentModal(src_app_screens_forms_view_detail_view_detail_page__WEBPACK_IMPORTED_MODULE_3__["ViewDetailPage"], { order });
                    const m = yield modal.onDidDismiss();
                    this.dataParams.page = 1;
                    this.ionViewWillEnter();
                }
            }
            else {
                this.ui.showToast("Verifique su conexión");
            }
        });
    }
    loadData(event) {
        if (this.network.getNetworkStatus().connected) {
            this.dataParams.page++;
            this.loading = true;
            this.request.get(`driver/history_services/${this.auth.user.id}?per_page=${this.dataParams.per_page}&page=${this.dataParams.page}`)
                .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("Sucesss");
                res.data.data.map(d => {
                    this.orders.push(d);
                });
                console.log("Orders", this.orders);
                this.loading = false;
                event.target.complete();
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("Error");
                event.target.disabled = true;
                this.allLoaded = true;
                this.loading = false;
                console.log("Error", err);
                err.error.data.map(d => {
                    this.orders.push(d);
                });
                event.target.complete();
            }));
        }
        else {
            this.ui.showToast("Verifique su conexión");
        }
    }
};
HistoryPage.ctorParameters = () => [
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_network_status_service__WEBPACK_IMPORTED_MODULE_7__["NetworkStatusService"] }
];
HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/screens-tabs/history/history.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./history.page.scss */ "./src/app/screens/screens-tabs/history/history.page.scss")).default]
    })
], HistoryPage);



/***/ })

}]);
//# sourceMappingURL=screens-screens-tabs-history-history-module-es2015.js.map