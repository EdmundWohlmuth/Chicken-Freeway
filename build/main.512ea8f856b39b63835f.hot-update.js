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
    constructor(stage, assetManager, screenManager) {
        this._seconds = Constants_1.COUNTDOWN_TIME;
        this.screenManager = screenManager;
        this.timerText = new createjs.BitmapText("150", assetManager.getSpriteSheet("glyphs"));
        this.timerText.x = 60;
        this.timerText.y = 45;
        this.timerText.letterSpacing = 1.5;
        stage.addChild(this.timerText);
    }
    get seconds() {
        return this._seconds;
    }
    set seconds(value) {
        this._seconds = value;
        this.timerText.text = String(value);
    }
    start(startingSeconds) {
        this._seconds = startingSeconds;
        this.timer = window.setInterval(() => {
            if (this._seconds > 0 && !this.screenManager.inMenuBool) {
                this._seconds--;
                this.timerText.text = String(this._seconds);
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
/******/ 	__webpack_require__.h = () => ("ee8f34a649a0c2d591ab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.512ea8f856b39b63835f.hot-update.js.map