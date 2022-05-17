"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Nest.ts":
/*!*********************!*\
  !*** ./src/Nest.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nest = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Nest {
    constructor(stage, assetManager, chicken) {
        this.chicken = chicken;
        this._sprite = assetManager.getSprite("sprites", "GameObjects/Nest", (0, Toolkit_1.randomMe)(10, (Constants_1.STAGE_WIDTH - this.width)), 50);
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
/******/ 	__webpack_require__.h = () => ("f3c351d8c3970df0193b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.27f204d1fa03e3f26b7c.hot-update.js.map