"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/SportsCar.ts":
/*!**************************!*\
  !*** ./src/SportsCar.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SportsCar = void 0;
const Car_1 = __webpack_require__(/*! ./Car */ "./src/Car.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class SportsCar extends Car_1.Car {
    constructor(stage, assetManager, chicken) {
        super(stage, assetManager, "Car/Left", "Car/Right");
        this.chicken = chicken;
        this.sprite.y = 294;
    }
    update() {
        super.update();
        console.log(this._sprite.x + " " + this._sprite.y);
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            console.log("collision");
            this.chicken.killMe();
        }
    }
    positionMe() {
        super.positionMe();
        if ((0, Toolkit_1.randomMe)(1, 3) == 1)
            this._direction = Car_1.Car.LEFT;
        else
            this._direction = Car_1.Car.RIGHT;
        console.log("direction = " + this._direction);
        if (this._direction = Car_1.Car.LEFT) {
            this._sprite.gotoAndPlay("Car/Left");
            this.sprite.x = 250;
        }
        else if (this._direction = Car_1.Car.RIGHT) {
            this._sprite.gotoAndPlay("Car/Right");
            this.sprite.x = 0;
        }
    }
}
exports.SportsCar = SportsCar;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2a699e649b8af63b2e87")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.180111a17b25bbd21fd2.hot-update.js.map