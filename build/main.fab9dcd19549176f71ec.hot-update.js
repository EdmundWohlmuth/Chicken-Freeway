"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/StopLight.ts":
/*!**************************!*\
  !*** ./src/StopLight.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StopLight = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class StopLight {
    constructor(stage, assetManager, train) {
        this.stage = stage;
        this._train = train;
        this.trainWidth = this._train.sprite.getBounds().width;
        this.assetManager = assetManager;
        this._sprite = assetManager.getSprite("sprites", "Lights/Go", 10, 315);
    }
    get sprite() {
        return this._sprite;
    }
    SwitchStates() {
        if (this._train.sprite.x > -500 && this._train.sprite.x < Constants_1.STAGE_WIDTH + this.trainWidth) {
            this._sprite = this.assetManager.getSprite("sprites", "Lights/Stop", 10, 350);
        }
        else {
            this._sprite = this.assetManager.getSprite("sprites", "Lights/Go", 10, 315);
        }
    }
}
exports.StopLight = StopLight;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b44d276bd23fe2d936e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.fab9dcd19549176f71ec.hot-update.js.map