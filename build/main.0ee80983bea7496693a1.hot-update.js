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
        this._sprite = this.assetManager.getSprite("sprites", "Lights/Go", 10, 350);
    }
    get sprite() {
        return this._sprite;
    }
    SwitchStates() {
        if (this._train.sprite.x > -500 && this._train.sprite.x < Constants_1.STAGE_WIDTH + this.trainWidth) {
            this._sprite.gotoAndPlay("Lights/Stop");
        }
        else {
            this._sprite.gotoAndPlay("Lights/Go");
        }
    }
}
exports.StopLight = StopLight;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8f3b8a75c58c4cdeb706")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0ee80983bea7496693a1.hot-update.js.map