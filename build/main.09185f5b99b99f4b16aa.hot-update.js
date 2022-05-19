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
    constructor(stage, assetManager) {
        this._seconds = Constants_1.COUNTDOWN_TIME;
        this.timerText = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.timerText.x = 45;
        this.timerText.y = 45;
        this.timerText.letterSpacing = 1.5;
        stage.addChild(this.timerText);
    }
    get seconds() {
        return this._seconds;
    }
    start(startingSeconds) {
        this._seconds = startingSeconds;
        this.
            this.timer = window.setInterval(() => {
            if (this._seconds > 0) {
                this._seconds--;
                console.log("Count down: " + this._seconds);
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
/******/ 	__webpack_require__.h = () => ("5b68c2b866050d7f92c0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.09185f5b99b99f4b16aa.hot-update.js.map