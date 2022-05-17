"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/UserInterface.ts":
/*!******************************!*\
  !*** ./src/UserInterface.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserInterface = void 0;
class UserInterface {
    constructor(stage, assetManager) {
        this.stage = stage;
        this.clearsText = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.clearsText.x = 255;
        this.clearsText.y = 50;
        this.clearsText.letterSpacing = 2;
        stage.addChild(this.clearsText);
        this.resetMe();
    }
    set clears(value) {
        this.clearsCount = value;
        this.clearsText.text = String(this.clearsCount);
    }
    resetMe() {
        this.clearsCount = 0;
        this.lives = 3;
    }
}
exports.UserInterface = UserInterface;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e5e5df4d972272f02e7d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.40a531c71babb1aa27b8.hot-update.js.map