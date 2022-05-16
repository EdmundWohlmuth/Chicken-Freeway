"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Bush.ts":
/*!*********************!*\
  !*** ./src/Bush.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bush = void 0;
const Chicken_1 = __webpack_require__(/*! ./Chicken */ "./src/Chicken.ts");
const Obstacle_1 = __webpack_require__(/*! ./Obstacle */ "./src/Obstacle.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Bush extends Obstacle_1.Obstacle {
    constructor(stage, assetManager, chicken) {
        super(stage, assetManager, "Decor/Bush");
        this._chicken = chicken;
    }
    update() {
        super.update();
        if ((0, Toolkit_1.boxHit)(this.sprite, this._chicken.sprite)) {
            if (this._chicken.direction == Chicken_1.Chicken.UP) {
                this._chicken.sprite.y = this._chicken.sprite.y + 5;
            }
            else if (this._chicken.direction == Chicken_1.Chicken.DOWN) {
                this._chicken.sprite.y = this._chicken.sprite.y - 5;
            }
            else if (this._chicken.direction == Chicken_1.Chicken.RIGHT) {
                this._chicken.sprite.x = this._chicken.sprite.x - 5;
            }
            else if (this._chicken.direction == Chicken_1.Chicken.LEFT) {
                this._chicken.sprite.x = this._chicken.sprite.x + 5;
            }
        }
    }
}
exports.Bush = Bush;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b99661f85d908af52cc2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d6f4d180ca8af8282133.hot-update.js.map