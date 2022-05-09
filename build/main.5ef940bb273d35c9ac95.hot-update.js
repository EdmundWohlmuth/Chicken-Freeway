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
        this._sprite = assetManager.getSprite("sprites", "GameObjects/Nest", (0, Toolkit_1.randomMe)(10, 500), 10);
        this.width = this._sprite.getBounds().width;
        stage.addChild(this._sprite);
    }
    update() {
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            this.chicken.stageClear();
            console.log("collssion");
        }
    }
}
exports.Nest = Nest;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a4bc7b4354467fab21ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5ef940bb273d35c9ac95.hot-update.js.map