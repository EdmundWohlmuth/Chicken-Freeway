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
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Car {
    constructor(stage, assetManager, animation) {
        this._speed = Constants_1.STARTING_CAR_SPEED;
        this.stage = stage;
        this._direction = Car.LEFT;
        this._sprite = assetManager.getSprite("sprites", animation, 250, 294);
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
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            console.log("collision");
            this.chicken.killMe();
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
/******/ 	__webpack_require__.h = () => ("d53cfbd755e9ce540772")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ea2df653d58eb93f2391.hot-update.js.map