"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/ScreenManager.ts":
/*!******************************!*\
  !*** ./src/ScreenManager.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScreenManager = void 0;
class ScreenManager {
    constructor(stage, assetManager) {
        this.stage = stage;
        this.MainMenu = new createjs.Container();
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/Pause_Overlay", 0, 0));
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/Instructions", 125, 140));
        let startButton = assetManager.getSprite("sprites", "Button/Start", 10, 10);
        this.MainMenu.addChild(this.startButton);
        this.GameOver.addChild(assetManager.getSprite("sprites", "UI/Pause_Overlay", 0, 0));
        this.GameOver.addChild(assetManager.getSprite("sprites", "Win-Lose/Lose_Game_Overlay", 125, 140));
        let restartButton = assetManager.getSprite("sprites", "Button/Restart", 10, 10);
        this.GameOver.addChild(this.restartButton);
    }
    showMainMenu() {
        this.hideAll();
        this.stage.addChildAt(this.MainMenu, 0);
        this.startButton.on("click", (e) => {
        }, this, true);
    }
    showGame() {
    }
    showGameOver() {
        this.hideAll();
        this.stage.addChildAt(this.GameOver, 0);
        this.restartButton.on("click", (e) => {
        }, this, true);
    }
    hideAll() {
        this.stage.removeChild(this.MainMenu);
        this.stage.removeChild(this.GameOver);
    }
}
exports.ScreenManager = ScreenManager;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("40ae9949fab06d42f750")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1eddd324fda5536d2bfd.hot-update.js.map