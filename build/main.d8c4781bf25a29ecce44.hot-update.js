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
        this.clearsText.x = 490;
        this.clearsText.y = 30;
        this.clearsText.letterSpacing = 2;
        stage.addChild(this.clearsText);
        this.score = assetManager.getSprite("sprites", "UI/Score", 450, 35);
        stage.addChild(this.score);
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
/******/ 	__webpack_require__.h = () => ("36f196d3ab64a704f607")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d8c4781bf25a29ecce44.hot-update.js.map