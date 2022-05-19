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
        this.timer = window.setInterval(this.onTimerUpdate, 1000);
    }
    reset() {
        this._seconds = 0;
    }
    onTimerUpdate() {
        if (this._seconds > 0) {
            this._seconds--;
            console.log(this._seconds);
        }
    }
}
exports.CountDown = CountDown;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8b26e4d353be50b6d885")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2384b8bec2bc36691999.hot-update.js.map