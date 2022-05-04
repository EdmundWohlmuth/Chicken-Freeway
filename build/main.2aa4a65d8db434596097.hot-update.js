"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Car.ts":
/*!********************!*\
  !*** ./src/Car.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Car = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
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
        if ((0, Toolkit_1.randomMe)(1, 3) == 1)
            this._direction = Car.LEFT;
        else
            this._direction = Car.RIGHT;
        console.log("direction = " + this._direction);
        if (this._direction == Car.LEFT) {
            this._sprite.gotoAndPlay(this._animationLeft);
            this.sprite.x = 250;
        }
        else {
            this._sprite.gotoAndPlay(this._animationRight);
            this.sprite.x = 0;
        }
    }
}
exports.Car = Car;
Car.RIGHT = 0;
Car.LEFT = 1;
this.stage.addChild(this._sprite);
update();
{
    if (this._direction == Car.LEFT) {
        this._sprite.x = this._sprite.x - this._speed;
        if (this._sprite.x < 0 - this.width) {
            this._sprite.x = (Constants_1.STAGE_WIDTH + this.width);
        }
    }
    else if (this._direction == Car.RIGHT) {
        this._sprite.x = this._sprite.x + this._speed;
        if (this._sprite.x > (Constants_1.STAGE_WIDTH - this.width)) {
            this._sprite.x = 0;
        }
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9d4d7757dff487b7c671")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2aa4a65d8db434596097.hot-update.js.map