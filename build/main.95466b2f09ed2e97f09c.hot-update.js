"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/CountDown.ts":
/*!**************************!*\
  !*** ./src/CountDown.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountDown = void 0;
class CountDown {
    constructor(stage, assetmanager) {
        this._seconds = 200;
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
            }
        }, 1000);
    }
    reset() {
        this._seconds = 0;
    }
}
exports.CountDown = CountDown;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("37ae0e6cc9a206beef92")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.95466b2f09ed2e97f09c.hot-update.js.map