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
        this.overlay = assetManager.getSprite("sprites", "UI/UI_Bar", 314, 535);
        stage.addChild(this.overlay);
        this.clearsText = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.clearsText.x = 490;
        this.clearsText.y = 50;
        this.clearsText.letterSpacing = 2;
        stage.addChild(this.clearsText);
        this.score = assetManager.getSprite("sprites", "UI/Score", 425, 50);
        stage.addChild(this.score);
        this.lifeCounter1 = assetManager.getSprite("sprites", "UI/Life", 425, 30);
        stage.addChild(this.lifeCounter1);
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
/******/ 	__webpack_require__.h = () => ("7a168d387843cc2015ef")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c04d375abc75949e21ab.hot-update.js.map