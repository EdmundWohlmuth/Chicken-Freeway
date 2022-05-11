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
    constructor(stage, assetManager, levelgen) {
        this.stage = stage;
        this.levelGen = levelgen;
        this.MainMenu = new createjs.Container();
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/Pause_Overlay", 0, 0));
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/Pause_Overlay", 0, 512));
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/Instructions", 125, 140));
        this.startButton = assetManager.getSprite("sprites", "Button/Start", 220, 400);
        this.MainMenu.addChild(this.startButton);
        this.GameOver = new createjs.Container();
        this.GameOver.addChild(assetManager.getSprite("sprites", "UI/Pause_Overlay", 0, 0));
        this.GameOver.addChild(assetManager.getSprite("sprites", "Win-Lose/Lose_Game_Overlay", 170, 240));
        this.restartButton = assetManager.getSprite("sprites", "Button/Restart", 200, 400);
        this.GameOver.addChild(this.restartButton);
        this.gameReset = new createjs.Event("gameReset", true, false);
    }
    showMainMenu() {
        this.hideAll();
        this.stage.addChildAt(this.MainMenu, 0);
        this.startButton.on("click", (e) => {
            console.log("start pressed");
            this.hideAll();
            this.levelGen.genLevels();
            this.startButton.dispatchEvent(this.gameReset);
        }, this, true);
    }
    showGameOver() {
        this.hideAll();
        this.stage.addChildAt(this.GameOver, 0);
        this.restartButton.on("click", (e) => {
            this.hideAll();
            this.showMainMenu();
        }, this, true);
    }
    hideAll() {
        this.levelGen.clearLevel();
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
/******/ 	__webpack_require__.h = () => ("a4d126fb13840d313112")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a0f1acb7577839e9e9c0.hot-update.js.map