(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screens-forms-detail-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/detail/detail.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/detail/detail.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\" style=\"position: relative;\">\n    <ion-title style=\"position: absolute; left: 5px;bottom:14px\">{{detail.address}}\n    </ion-title>\n    <ion-button (click)=\"dismiss()\" style=\"position: absolute; right: 5px;bottom:5px\">\n      <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"warning\">\n\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div #map id=\"map\" style=\"width: 100%;height: 200px;\"></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <p>Duración: {{duration | uppercase}} </p>\n      <p>Distancia: {{distance | uppercase}} </p>\n      <p class=\"ion-text-center\">{{detail.description}}</p>\n      <ng-container *ngIf=\"detail.status !=25\">\n        <ion-button expand=\"full\" fill=\"outline\" color=\"primary\" (click)=\"registerEvent()\">Eventualiad</ion-button>\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"endDetail()\">Finalizar</ion-button>\n      </ng-container>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/screens/forms/detail/detail-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/screens/forms/detail/detail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function() { return DetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.page */ "./src/app/screens/forms/detail/detail.page.ts");




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/forms/detail/detail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/screens/forms/detail/detail.module.ts ***!
  \*******************************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/screens/forms/detail/detail-routing.module.ts");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/screens/forms/detail/detail.page.ts");







let DetailPageModule = class DetailPageModule {
};
DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/screens/forms/detail/detail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/screens/forms/detail/detail.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/screens/forms/detail/detail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/screens/forms/detail/detail.page.ts ***!
  \*****************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _events_events_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/events.page */ "./src/app/screens/forms/events/events.page.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let DetailPage = class DetailPage {
    constructor(ui, request, auth) {
        this.ui = ui;
        this.request = request;
        this.auth = auth;
        this.az_arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        this.distance = "";
        this.duration = "";
        this.currentLocation = {};
        this.address_array = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = this.ui.loading("Por favor espere...");
            const coordinates = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Geolocation"].getCurrentPosition();
            const { latitude, longitude } = coordinates.coords;
            this.currentLocation = {
                latitude,
                longitude
            };
            this.address_array.push(this.currentLocation);
            this.address_array.push(this.detail);
            this.loadMap(loader);
        });
    }
    loadMap(loader) {
        //obtener usos de la API
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        //puntos de referencia para agregar
        var waypts = [];
        var markers = [];
        var infos = [];
        //coordenadas de los puntos de ruta
        for (let i = 0; i < this.address_array.length; i++) {
            let latlng = {
                lat: parseFloat(this.address_array[i].latitude),
                lng: parseFloat(this.address_array[i].longitude)
            };
            waypts.push({ location: latlng, stopover: true });
        }
        //creo mapa
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: { lat: waypts[0].location.lat, lng: waypts[0].location.lng }
        });
        //muestro el mapa
        directionsDisplay.setMap(map);
        //ventanas de informacion
        var infoWindow = new google.maps.InfoWindow();
        //coordenadas markers personalizados con ventana de información
        for (let i = 0; i < this.address_array.length; i++) {
            let latlng = {
                lat: parseFloat(this.address_array[i].latitude),
                lng: parseFloat(this.address_array[i].longitude)
            };
            let marker = new google.maps.Marker({
                position: latlng,
                map: map,
                icon: '../../../assets/imgs/markers/' + this.az_arr[i] + '.png'
            });
            markers.push(marker);
            // agrego la informacion de la dirección
            infos.push(this.address_array[i].address);
            // google.maps.event.addListener(marker, 'click', (function(marker, i) {
            //   return function() {
            //       infoWindow.setContent(infos[i]);
            //       infoWindow.open(map, marker);
            //   }
            // })(marker, i));
        }
        // pregunto si es ida y vuelta el servicio
        let origin, destination, return_pt;
        let n = (this.address_array.length - 1);
        if (this.detail.round_trip === true) {
            origin = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
            destination = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
            return_pt = { lat: waypts[n].location.lat, lng: waypts[n].location.lng };
            //punto de retorno en km y min
            this.getDistanceMatrix(return_pt, origin);
        }
        else {
            origin = { lat: waypts[0].location.lat, lng: waypts[0].location.lng };
            destination = { lat: waypts[n].location.lat, lng: waypts[n].location.lng };
            this.getDistanceMatrix(origin, origin);
        }
        // pinto la ruta
        directionsService.route({
            origin: origin,
            destination: destination,
            waypoints: waypts,
            travelMode: google.maps.TravelMode.DRIVING
        }, function (response, status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
                else {
                    console.log('Ha fallat la comunicació amb el mapa a causa de: ' + status);
                }
            });
        });
        //calcular distancia
        for (let i = 0; i < waypts.length; i++) {
            let a = null, b = null;
            if (i < (waypts.length - 1)) {
                a = { lat: waypts[i].location.lat, lng: waypts[i].location.lng };
            }
            let j = i + 1;
            if (j <= (waypts.length - 1)) {
                b = { lat: waypts[j].location.lat, lng: waypts[j].location.lng };
            }
            if (a != null && b != null) {
                this.getDistanceMatrix(a, b, loader);
            }
        }
    }
    getDistanceMatrix(origin, destination, loader) {
        var service = new google.maps.DistanceMatrixService();
        var _this = this;
        //calculo distancia
        service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (status != google.maps.DistanceMatrixStatus.OK) {
                    console.log("Error was: " + status);
                }
                else {
                    let distance_text = response.rows[0].elements[0].distance.text;
                    console.log("Distance Text", distance_text);
                    let distance = distance_text.substring(0, distance_text.length - 3).replace(",", ".");
                    let duration_text = response.rows[0].elements[0].duration.text;
                    console.log("Duration Text", duration_text);
                    let duration = duration_text.substring(0, distance_text.length - 4);
                    _this.getCalculateDistance(distance_text, duration_text);
                    (yield loader).dismiss();
                }
            });
        });
    }
    getCalculateDistance(distance, duration) {
        this.distance = distance;
        this.duration = duration;
    }
    registerEvent() {
        this.ui.presentModal(_events_events_page__WEBPACK_IMPORTED_MODULE_4__["EventsPage"], { detail: this.detail });
    }
    endDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = this.ui.loading("Por favor espere...");
            const coordinates = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Geolocation"].getCurrentPosition();
            const { latitude, longitude } = coordinates.coords;
            const data = new FormData();
            data.append("order_detail_id", this.detail.id);
            data.append("latitude", latitude.toString());
            data.append("longitude", longitude.toString());
            data.append("description", "Finalización Detalle");
            data.append("user_id", this.auth.user.id.toString());
            this.request.post("driver/end_order_detail", data)
                .subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                (yield loader).dismiss();
                this.detail.status = 25;
                this.ui.showToast("Servicio finalizado.", () => {
                    this.dismiss();
                });
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("Error", err);
                (yield loader).dismiss();
                this.ui.showToast("Ha ocurrido un error");
            }));
        });
    }
    dismiss() {
        this.ui.dismiss();
    }
};
DetailPage.ctorParameters = () => [
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DetailPage.prototype, "detail", void 0);
DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/detail/detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail.page.scss */ "./src/app/screens/forms/detail/detail.page.scss")).default]
    })
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=screens-forms-detail-detail-module-es2015.js.map