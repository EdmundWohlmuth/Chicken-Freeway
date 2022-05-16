"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/LargeRock.ts":
/*!**************************!*\
  !*** ./src/LargeRock.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LargeRock = void 0;
const Chicken_1 = __webpack_require__(/*! ./Chicken */ "./src/Chicken.ts");
const Obstacle_1 = __webpack_require__(/*! ./Obstacle */ "./src/Obstacle.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class LargeRock extends Obstacle_1.Obstacle {
    constructor(stage, assetManager, chicken, yCoord) {
        super(stage, assetManager, "Decor/Rock_LG");
        this._chicken = chicken;
    }
    update() {
        if ((0, Toolkit_1.boxHit)(this.sprite, this._chicken.sprite)) {
            if (this._chicken.direction == Chicken_1.Chicken.UP) {
                this._chicken.sprite.y = this._chicken.sprite.y + 1;
            }
            else if (this._chicken.direction == Chicken_1.Chicken.DOWN) {
                this._chicken.sprite.y = this._chicken.sprite.y - 1;
            }
            else if (this._chicken.direction == Chicken_1.Chicken.RIGHT) {
                this._chicken.sprite.x = this._chicken.sprite.x - 1;
            }
            else if (this._chicken.direction == Chicken_1.Chicken.LEFT) {
                this._chicken.sprite.y = this._chicken.sprite.y + 1;
            }
        }
    }
}
exports.LargeRock = LargeRock;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("943f0607a7585094b22e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2f67ff773d9ba6ab4aed.hot-update.js.map