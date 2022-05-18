"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Train.ts":
/*!**********************!*\
  !*** ./src/Train.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Train = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Train {
    constructor(stage, assetManager, chicken) {
        this.stage = stage;
        this._speed = Constants_1.TRAIN_STARTING_SPEED;
        this.chicken = chicken;
        this._sprite = assetManager.getSprite("sprites", "Obstacles/Train", 0, 0);
        this.width = this._sprite.getBounds().width;
    }
    get sprite() {
        return this._sprite;
    }
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value;
    }
    positionMe() {
        this._sprite.x = (0, Toolkit_1.randomMe)((-1000 - this.width), (Constants_1.STAGE_WIDTH + this.width + 1000));
        this._sprite.y = 305;
        this.stage.addChild(this._sprite);
    }
    update() {
        this._sprite.x = this._sprite.x + this._speed;
        if (this._sprite.x > (Constants_1.STAGE_WIDTH + this.width + 2500)) {
            this._sprite.x = (-2500 - this.width);
        }
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            this.chicken.killMe();
        }
    }
}
exports.Train = Train;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c3857f4d29814c278d36")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.aa5fec3f56fa09b7549c.hot-update.js.map