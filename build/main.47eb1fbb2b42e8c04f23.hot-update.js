"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Sedan.ts":
/*!**********************!*\
  !*** ./src/Sedan.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sedan = void 0;
const Car_1 = __webpack_require__(/*! ./Car */ "./src/Car.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Sedan extends Car_1.Car {
    constructor(stage, assetManager, chicken) {
        super(stage, assetManager, "Sedan/Left", "Sedan/Right");
        this.chicken = chicken;
        this.sprite.y = 324;
    }
    update() {
        super.update();
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            console.log("collision");
            this.chicken.killMe();
        }
    }
}
exports.Sedan = Sedan;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ae3b3e8dca469bbc3d1d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.47eb1fbb2b42e8c04f23.hot-update.js.map