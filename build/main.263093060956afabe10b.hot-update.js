"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Corn1Up.ts":
/*!************************!*\
  !*** ./src/Corn1Up.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Corn1Up = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Corn1Up {
    constructor(stage, assetManager, chicken) {
        this.stage = stage;
        this.chicken = chicken;
        this._sprite = assetManager.getSprite("sprites", "GameObjects/1Up", 0, 0);
        this.width = this._sprite.getBounds().width;
        this.stage.addChild(this._sprite);
    }
    positionMe() {
        this._sprite.x = (0, Toolkit_1.randomMe)(10, 480);
        this._sprite.y = (0, Toolkit_1.randomMe)(96, 384);
    }
    new1Up() {
        this.stage.addChild(this._sprite);
        this.positionMe();
    }
    update() {
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            this.stage.removeChild(this._sprite);
            console.log("1Up get");
        }
    }
}
exports.Corn1Up = Corn1Up;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("78aaa99e7ad41f39af5f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.263093060956afabe10b.hot-update.js.map