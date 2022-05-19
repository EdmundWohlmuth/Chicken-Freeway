"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/CountDown.ts":
/*!**************************!*\
  !*** ./src/CountDown.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountDown = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class CountDown {
    constructor(stage, assetmanager) {
        this._seconds = Constants_1.COUNTDOWN_TIME;
    }
    get seconds() {
        return this._seconds;
    }
    start(startingSeconds) {
        this._seconds = startingSeconds;
        this.timer = window.setInterval(() => {
            if (this._seconds > 0) {
                this._seconds--;
                console.log("Count down: " + this._seconds);
                this._seconds = this.userInterface.timer;
            }
        }, 1000);
    }
    reset() {
        this._seconds = Constants_1.COUNTDOWN_TIME;
    }
}
exports.CountDown = CountDown;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a9749bda9013dfdd28f1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9a7728689bf529c93154.hot-update.js.map