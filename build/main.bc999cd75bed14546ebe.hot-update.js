"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/PoliceCar.ts":
/*!**************************!*\
  !*** ./src/PoliceCar.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PoliceCar = void 0;
const Car_1 = __webpack_require__(/*! ./Car */ "./src/Car.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class PoliceCar extends Car_1.Car {
    constructor(stage, assetManager, chicken) {
        super(stage, assetManager, "Police/Left", "Police/Right");
        this.chicken = chicken;
        this.sprite.y = 418;
    }
    update() {
        super.update();
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            console.log("collision");
            this.chicken.killMe();
        }
    }
}
exports.PoliceCar = PoliceCar;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("69bd9add9a8d6236ce76")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.bc999cd75bed14546ebe.hot-update.js.map