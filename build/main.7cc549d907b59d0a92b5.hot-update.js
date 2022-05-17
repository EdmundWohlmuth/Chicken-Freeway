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
    constructor(stage, assetManager) {
        this._speed = Constants_1.STARTING_CAR_SPEED;
        this.stage = stage;
        this._direction = Car.LEFT;
        this._sprite = assetManager.getSprite("sprites", "Car/Left", 550, 300);
        this.width = this._sprite.getBounds().width;
    }
    get sprite() {
        return this._sprite;
    }
    positionMe() {
        if (this._direction = Car.LEFT) {
            this._sprite.gotoAndPlay("Car/Left");
        }
        else if (this._direction = Car.RIGHT) {
            this._sprite.gotoAndPlay("Car/Right");
        }
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
/******/ 	__webpack_require__.h = () => ("6081e367e729607765e3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7cc549d907b59d0a92b5.hot-update.js.map