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
        this.overlay = assetManager.getSprite("sprites", "UI/UI_Bar", 314, 1);
        stage.addChild(this.overlay);
        this.clearsText = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.clearsText.x = 400;
        this.clearsText.y = 45;
        this.clearsText.letterSpacing = 2;
        stage.addChild(this.clearsText);
        this.score = assetManager.getSprite("sprites", "UI/Score", 325, 45);
        stage.addChild(this.score);
        this.lifeCounter1 = assetManager.getSprite("sprites", "UI/Life", 380, 18);
        this.lifeCounter2 = assetManager.getSprite("sprites", "UI/Life", (380 + 10), 18);
        this.lifeCounter3 = assetManager.getSprite("sprites", "UI/Life", (380 + 10), 18);
        stage.addChild(this.lifeCounter1);
        stage.addChild(this.lifeCounter2);
        stage.addChild(this.lifeCounter2);
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
/******/ 	__webpack_require__.h = () => ("2384572df91cde2aa9d9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d85fa2e6c194bb4c5348.hot-update.js.map