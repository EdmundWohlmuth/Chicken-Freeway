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
        this.startButton = assetManager.getSprite("sprites", "Button/Start", 125, 150);
        this.MainMenu.addChild(this.startButton);
    }
    showMainMenu() {
        this.hideAll();
        this.stage.addChildAt(this.MainMenu, 0);
        this.startButton.on("click", (e) => {
            console.log("button pressed");
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
/******/ 	__webpack_require__.h = () => ("dea22650d72a1c5e8cda")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.fe7749ec28a29729b9de.hot-update.js.map