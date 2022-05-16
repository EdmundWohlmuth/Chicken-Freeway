"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Obstacle.ts":
/*!*************************!*\
  !*** ./src/Obstacle.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Obstacle = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
const Chicken_1 = __webpack_require__(/*! ./Chicken */ "./src/Chicken.ts");
class Obstacle {
    constructor(stage, assetManager, objectSprite) {
        this.stage = stage;
        this.objectSprite = objectSprite;
        this._sprite = assetManager.getSprite("sprites", objectSprite, 0, 0);
        this.width = this._sprite.getBounds().width;
    }
    get sprite() {
        return this._sprite;
    }
    positionMe(yPosition) {
        this._sprite.x = (0, Toolkit_1.randomMe)(10, (Constants_1.STAGE_WIDTH - 10));
        this.sprite.y = yPosition;
        this.stage.addChild(this._sprite);
    }
    update() {
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
exports.Obstacle = Obstacle;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b488e718f11c569973ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7a2aa596afce4d34c360.hot-update.js.map