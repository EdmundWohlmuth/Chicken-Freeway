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
    constructor(stage, assetManager, chicken, YCoord) {
        super(stage, assetManager, "Car/Left", "Car/Right");
        this.chicken = chicken;
        this.sprite.y = YCoord;
    }
    update() {
        super.update();
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            console.log("collision");
            this.chicken.killMe();
        }
    }
}
exports.SportsCar = SportsCar;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8d1a01f9db911a91194e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.08663fc68cb42963f4f6.hot-update.js.map