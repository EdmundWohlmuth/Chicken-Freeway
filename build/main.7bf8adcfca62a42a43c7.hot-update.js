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
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class LargeRock extends Obstacle_1.Obstacle {
    constructor(stage, assetManager, chicken) {
        super(stage, assetManager, "Decor/Rock_LG");
        this._chicken = chicken;
    }
    update() {
        super.update();
        if ((0, Toolkit_1.boxHit)(this.sprite, this._chicken.sprite)) {
            if (this._chicken.direction == Chicken_1.Chicken.UP) {
                this._chicken.sprite.y = this._chicken.sprite.y + Constants_1.CHICKEN_SPEED;
            }
            else if (this._chicken.direction == Chicken_1.Chicken.DOWN) {
                this._chicken.sprite.y = this._chicken.sprite.y - Constants_1.CHICKEN_SPEED;
            }
            else if (this._chicken.direction == Chicken_1.Chicken.RIGHT) {
                this._chicken.sprite.x = this._chicken.sprite.x - Constants_1.CHICKEN_SPEED;
            }
            else if (this._chicken.direction == Chicken_1.Chicken.LEFT) {
                this._chicken.sprite.x = this._chicken.sprite.x + Constants_1.CHICKEN_SPEED;
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
/******/ 	__webpack_require__.h = () => ("935755d6711f019a49a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7bf8adcfca62a42a43c7.hot-update.js.map