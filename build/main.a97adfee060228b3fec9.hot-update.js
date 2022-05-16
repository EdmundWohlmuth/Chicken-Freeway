"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/NormalRock.ts":
/*!***************************!*\
  !*** ./src/NormalRock.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NormalRock = void 0;
const Chicken_1 = __webpack_require__(/*! ./Chicken */ "./src/Chicken.ts");
const Obstacle_1 = __webpack_require__(/*! ./Obstacle */ "./src/Obstacle.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class NormalRock extends Obstacle_1.Obstacle {
    constructor(stage, assetManager, chicken) {
        super(stage, assetManager, "Decor/Rock_M");
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
exports.NormalRock = NormalRock;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f76dee0ac2cc43ebc89")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a97adfee060228b3fec9.hot-update.js.map