"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Nest.ts":
/*!*********************!*\
  !*** ./src/Nest.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nest = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Nest {
    constructor(stage, assetManager, chicken) {
        this.chicken = chicken;
        this._sprite = assetManager.getSprite("sprites", "GameObjects/Nest", (0, Toolkit_1.randomMe)(10, 470), 10);
        this.width = this._sprite.getBounds().width;
        this.nestReached = new createjs.Event("nestReached", true, false);
        stage.addChild(this._sprite);
    }
    update() {
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            this.chicken.stageClear();
            this._sprite.dispatchEvent(this.nestReached);
        }
    }
}
exports.Nest = Nest;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1d987a3125fb659331ce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.36f196d3ab64a704f607.hot-update.js.map