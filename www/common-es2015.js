(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/request-location-permission/request-location-permission.page.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/request-location-permission/request-location-permission.page.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"advice\">\n    <h4 class=\"ion-text-center\">¡Aviso importante!</h4>\n    <p class=\"ion-text-center grey-color\">Esta aplicación recopila datos de ubicación para\n      habilitar el seguimiento del mensajero en tiempo real, incluso cuando la aplicación está cerrada o no está en uso.\n      Para un correcto funcionamiento en dispositivos Android 10 o superior, recomendamos tener la ubicación encendida con los permisos de ubicación todo el tiempo e ignorando la optimización de la batería\n    </p>\n  </div>\n  <div class=\"ion-text-center terms-and-conditions\">\n\n    <p class=\"grey-color\">Al hacer clic en \"Aceptar\", aceptas nuestras\n      <a href=\"https://www.zapplogistica.com/privacy\" class=\"ion-margin-top ion-text-center\" target=\"_blank\"\n        rel=\"noopener noreferrer\"  color=\"primary\">condiciones</a>, la <a\n        href=\"https://www.zapplogistica.com/privacy\" class=\"ion-margin-top ion-text-center\" target=\"_blank\"\n        rel=\"noopener noreferrer\"  color=\"primary\">Política de datos</a> y la <a\n        href=\"https://www.zapplogistica.com/privacy\" class=\"ion-margin-top ion-text-center\" target=\"_blank\"\n        rel=\"noopener noreferrer\"  color=\"primary\">Política de cookies</a>.\n    </p>\n\n  </div>\n\n  <img src=\"assets/imgs/express-courier-2.png\" class=\"img-courrier\" alt=\"\" >\n  <ion-button expand=\"full\" class=\"button denie\" (click)=\"denie()\">\n    DENEGAR\n  </ion-button>\n  <ion-button expand=\"full\" class=\"button accept\" (click)=\"accept()\">Aceptar</ion-button>\n  <!-- <ion-button expand=\"block\" >Aceptar</ion-button> -->\n</ion-content>");

/***/ }),

/***/ "./src/app/screens/forms/request-location-permission/request-location-permission.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/screens/forms/request-location-permission/request-location-permission.page.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".advice {\n  position: absolute;\n  top: 23px;\n}\n\n.terms-and-conditions {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 100px;\n}\n\n.terms-and-conditions p a {\n  color: #1c024b;\n}\n\n.img-courrier {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 300px;\n  height: 200px;\n}\n\nion-button.button {\n  position: absolute;\n  bottom: 0;\n  width: 50%;\n}\n\nion-button.button.denie {\n  --background: white;\n  color: #21c1ff;\n}\n\nion-button.button.accept {\n  right: 0;\n  --background: #21c1ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNwcmlsbGEvRG9jdW1lbnRvc01pZ3VlbC9Qcm95ZWN0b3MvemFwcC96YXBwLWRyaXZlci1hcHAtcnBlbmFsb3phL3NyYy9hcHAvc2NyZWVucy9mb3Jtcy9yZXF1ZXN0LWxvY2F0aW9uLXBlcm1pc3Npb24vcmVxdWVzdC1sb2NhdGlvbi1wZXJtaXNzaW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9mb3Jtcy9yZXF1ZXN0LWxvY2F0aW9uLXBlcm1pc3Npb24vcmVxdWVzdC1sb2NhdGlvbi1wZXJtaXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFUTtFQUNJLGNBQUE7QUNBWjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBRE1JO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hSOztBREtRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDSFo7O0FETVE7RUFDSSxRQUFBO0VBQ0EscUJBQUE7QUNKWiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvZm9ybXMvcmVxdWVzdC1sb2NhdGlvbi1wZXJtaXNzaW9uL3JlcXVlc3QtbG9jYXRpb24tcGVybWlzc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWR2aWNlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyM3B4O1xufVxuXG4udGVybXMtYW5kLWNvbmRpdGlvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMTAwcHg7XG5cbiAgICAmIHAge1xuICAgICAgICAmIGEge1xuICAgICAgICAgICAgY29sb3I6ICMxYzAyNGI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pbWctY291cnJpZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAmLmJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogNTAlO1xuXG4gICAgICAgICYuZGVuaWUge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMjFjMWZmO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY2NlcHQge1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMyMWMxZmY7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmFkdmljZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyM3B4O1xufVxuXG4udGVybXMtYW5kLWNvbmRpdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDEwMHB4O1xufVxuLnRlcm1zLWFuZC1jb25kaXRpb25zIHAgYSB7XG4gIGNvbG9yOiAjMWMwMjRiO1xufVxuXG4uaW1nLWNvdXJyaWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tYnV0dG9uLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNTAlO1xufVxuaW9uLWJ1dHRvbi5idXR0b24uZGVuaWUge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzIxYzFmZjtcbn1cbmlvbi1idXR0b24uYnV0dG9uLmFjY2VwdCB7XG4gIHJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6ICMyMWMxZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/screens/forms/request-location-permission/request-location-permission.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/screens/forms/request-location-permission/request-location-permission.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: RequestLocationPermissionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestLocationPermissionPage", function() { return RequestLocationPermissionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cordova-background-geolocation-lt */ "./node_modules/cordova-background-geolocation-lt/src/ionic/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





// import { BackgroundGeolocation, BackgroundGeolocationAuthorizationStatus } from '@ionic-native/background-geolocation/ngx';


let RequestLocationPermissionPage = class RequestLocationPermissionPage {
    constructor(ui, platform, 
    // private backgroundGeolocation: BackgroundGeolocation,
    auth) {
        this.ui = ui;
        this.platform = platform;
        this.auth = auth;
        this.platform = platform;
    }
    ngOnInit() {
    }
    denie() {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Capacitor"].platform !== 'web') {
            // App.exitApp()
            try {
                this.auth.logOut();
                navigator['app'].exitApp();
            }
            catch (e) {
                console.log("Error closing app", e);
            }
        }
        else {
            this.dismiss();
        }
    }
    accept() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dismiss();
            localStorage.setItem("background_location_accepted", "accepted");
            try {
                const status = yield cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_5__["default"].requestPermission();
                if (status == 2) {
                    yield this.ui.presentAlert({
                        mode: 'ios',
                        header: '¡Advertencia!',
                        message: 'Si la aplicación no tiene perimisos para obtener su ubicación, no podrá tener un correcto funcionamiento',
                        buttons: [
                            {
                                text: 'Aceptar',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {
                                    console.log("Execute");
                                }
                            },
                        ]
                    });
                }
                else {
                    if (status == 3) {
                        let isIgnoring = yield cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_5__["default"].deviceSettings.isIgnoringBatteryOptimizations();
                        if (!isIgnoring) {
                            cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_5__["default"].deviceSettings.showIgnoreBatteryOptimizations().then((request) => {
                                console.log(`- Screen seen? ${request.seen} ${request.lastSeenAt}`);
                                console.log(`- Device: ${request.manufacturer} ${request.model} ${request.version}`);
                                // If we've already shown this screen to the user, we don't want to annoy them.
                                // if (request.seen) {
                                //   return;
                                // }
                                cordova_background_geolocation_lt__WEBPACK_IMPORTED_MODULE_5__["default"].deviceSettings.show(request);
                                // It's your responsibility to instruct the user what exactly
                                // to do here, perhaps with a Confirm Dialog:
                            }).catch((error) => {
                                // Depending on Manufacturer/Model/OS Version, a Device may not implement
                                // a particular Settings screen.
                                console.warn(error);
                            });
                        }
                        // User clicked [Confirm] button.  Execute the redirect to settings screen:
                    }
                    else {
                    }
                }
            }
            catch (e) {
                // this.ui.showToast("Hubo un error con Background " + JSON.stringify(e));
            }
        });
    }
    dismiss() {
        this.ui.dismiss();
    }
};
RequestLocationPermissionPage.ctorParameters = () => [
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RequestLocationPermissionPage.prototype, "request", void 0);
RequestLocationPermissionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-location-permission',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./request-location-permission.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/screens/forms/request-location-permission/request-location-permission.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./request-location-permission.page.scss */ "./src/app/screens/forms/request-location-permission/request-location-permission.page.scss")).default]
    })
], RequestLocationPermissionPage);



/***/ }),

/***/ "./src/app/screens/forms/view-detail/view-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/screens/forms/view-detail/view-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ViewDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailPageRoutingModule", function() { return ViewDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-detail.page */ "./src/app/screens/forms/view-detail/view-detail.page.ts");




const routes = [
    {
        path: '',
        component: _view_detail_page__WEBPACK_IMPORTED_MODULE_3__["ViewDetailPage"]
    }
];
let ViewDetailPageRoutingModule = class ViewDetailPageRoutingModule {
};
ViewDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/screens/forms/view-detail/view-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/screens/forms/view-detail/view-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: ViewDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailPageModule", function() { return ViewDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-detail-routing.module */ "./src/app/screens/forms/view-detail/view-detail-routing.module.ts");
/* harmony import */ var _modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/aplication-pipe-module/aplication-pipe-module.module */ "./src/app/modules/aplication-pipe-module/aplication-pipe-module.module.ts");
/* harmony import */ var _view_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-detail.page */ "./src/app/screens/forms/view-detail/view-detail.page.ts");
/* harmony import */ var src_app_modules_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/common-components/common-components.module */ "./src/app/modules/common-components/common-components.module.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");










let ViewDetailPageModule = class ViewDetailPageModule {
};
ViewDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewDetailPageRoutingModule"],
            _modules_aplication_pipe_module_aplication_pipe_module_module__WEBPACK_IMPORTED_MODULE_6__["AplicationPipeModuleModule"],
            src_app_modules_common_components_common_components_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentsModule"]
        ],
        providers: [
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"]
        ],
        declarations: [_view_detail_page__WEBPACK_IMPORTED_MODULE_7__["ViewDetailPage"],],
        exports: [_view_detail_page__WEBPACK_IMPORTED_MODULE_7__["ViewDetailPage"]]
    })
], ViewDetailPageModule);



/***/ }),

/***/ "./src/app/services/common-atrributes.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/common-atrributes.service.ts ***!
  \*******************************************************/
/*! exports provided: CommonAtrributesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAtrributesService", function() { return CommonAtrributesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CommonAtrributesService = class CommonAtrributesService {
    constructor() {
        this.colors = [
            "Blanco",
            "Negro",
            "Rojo",
            "Verde",
            "Amarillo",
            "Azul",
            "Café",
            "Morado",
            "Rosado",
            "Gris",
            "Plateado",
        ];
    }
    get years() {
        const date = new Date();
        const year = date.getFullYear();
        const array = [];
        for (let i = 2008; i <= year; i++) {
            array.push(i);
        }
        return array;
    }
};
CommonAtrributesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonAtrributesService);



/***/ }),

/***/ "./src/app/validators/passwod.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/validators/passwod.validator.ts ***!
  \*************************************************/
/*! exports provided: ComparePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparePassword", function() { return ComparePassword; });
// To validate password and confirm password
function ComparePassword(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map