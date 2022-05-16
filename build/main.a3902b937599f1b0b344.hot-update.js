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
}
exports.Obstacle = Obstacle;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3c4ceb27381a14d6bfc8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a3902b937599f1b0b344.hot-update.js.map