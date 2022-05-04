"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Car.ts":
/*!********************!*\
  !*** ./src/Car.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Car = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Car {
    constructor(stage, assetManager, animationLeft, animationRight) {
        this._speed = Constants_1.STARTING_CAR_SPEED;
        this.stage = stage;
        this._animationLeft = animationLeft;
        this._animationRight = animationRight;
        this._sprite = assetManager.getSprite("sprites", animationLeft, 0, 0);
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
        this.stage.addChild(this._sprite);
    }
    update() {
        if (this._direction = Car.LEFT) {
            this._sprite.x = this._sprite.x - this._speed;
            if (this._sprite.x < 0 - this.width) {
                this._sprite.x = (Constants_1.STAGE_WIDTH + this.width);
            }
        }
        else if (this._direction = Car.RIGHT) {
            this._sprite.x = this._sprite.x + this._speed;
            if (this._sprite.x > (Constants_1.STAGE_WIDTH - this.width)) {
                this._sprite.x = 0;
            }
        }
    }
}
exports.Car = Car;
Car.RIGHT = 0;
Car.LEFT = 1;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a18b4317b73e0fc779bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2a699e649b8af63b2e87.hot-update.js.map