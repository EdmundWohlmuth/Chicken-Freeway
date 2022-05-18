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
        this.inMenu = true;
        this.MainMenu = new createjs.Container();
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UIStartScreen", 0, 0));
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/Instructions", 100, 110));
        this.startButton = assetManager.getSprite("sprites", "Button/Start", 220, 500);
        this.MainMenu.addChild(this.startButton);
        this.GameOver = new createjs.Container();
        this.GameOver.addChild(assetManager.getSprite("sprites", "UI/Background", 0, 0));
        this.GameOver.addChild(assetManager.getSprite("sprites", "Win-Lose/Lose_Game_Overlay", 170, 240));
        this.restartButton = assetManager.getSprite("sprites", "Button/Restart", 200, 400);
        this.GameOver.addChild(this.restartButton);
        this.gameReset = new createjs.Event("gameReset", true, false);
    }
    get inMenuBool() {
        return this.inMenu;
    }
    showMainMenu() {
        this.hideAll();
        this.stage.addChildAt(this.MainMenu, 0);
        this.inMenu = true;
        this.startButton.on("click", (e) => {
            console.log("start pressed");
            this.hideAll();
            this.levelGen.genLevels();
            this.inMenu = false;
            console.log("game reset");
        }, this, true);
    }
    showGameOver() {
        this.hideAll();
        this.stage.addChildAt(this.GameOver, 0);
        this.inMenu = true;
        this.restartButton.on("click", (e) => {
            this.hideAll();
            this.showMainMenu();
            this.startButton.dispatchEvent(this.gameReset);
            this.inMenu = true;
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
/******/ 	__webpack_require__.h = () => ("dc78a57bbcd31ae5eb41")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.92df56d1e31ff0c079fa.hot-update.js.map