"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/ScreenManager.ts":
/*!******************************!*\
  !*** ./src/ScreenManager.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScreenManager = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class ScreenManager {
    constructor(stage, assetManager, levelgen, countDown) {
        this.stage = stage;
        this.levelGen = levelgen;
        this._countDown = countDown;
        this.inMenu = true;
        this.MainMenu = new createjs.Container();
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/Background", 0, 0));
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/StartScreen", 100, 110));
        this.startButton = assetManager.getSprite("sprites", "Button/Start", 220, 410);
        this.MainMenu.addChild(this.startButton);
        this.instructionsButton = assetManager.getSprite("sprites", "Button/Instruction", 180, 450);
        this.MainMenu.addChild(this.instructionsButton);
        this.GameOver = new createjs.Container();
        this.GameOver.addChild(assetManager.getSprite("sprites", "UI/Background", 0, 0));
        this.GameOver.addChild(assetManager.getSprite("sprites", "Win-Lose/Lose_Game_Overlay", 170, 240));
        this.restartButton = assetManager.getSprite("sprites", "Button/Restart", 200, 400);
        this.GameOver.addChild(this.restartButton);
        this.HowToPlay = new createjs.Container();
        this.HowToPlay.addChild(assetManager.getSprite("sprites", "UI/Background", 0, 0));
        this.HowToPlay.addChild(assetManager.getSprite("sprites", "UI/Instructions", 100, 110));
        this.backButton = assetManager.getSprite("sprites", "Button/Back", 220, 500);
        this.HowToPlay.addChild(this.backButton);
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
            this.hideAll();
            this.levelGen.genLevels();
            this.inMenu = false;
            this._countDown.start(Constants_1.COUNTDOWN_TIME);
        }, this, true);
        this.instructionsButton.on("click", (e) => {
            this.hideAll();
            this.showHowToPlay();
            this.inMenu = true;
        }, true, true);
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
    showHowToPlay() {
        this.hideAll();
        this.stage.addChildAt(this.HowToPlay, 0);
        this.inMenu = true;
        this.backButton.on("click", (e) => {
            this.hideAll();
            this.showMainMenu();
            this.inMenu = true;
        }, true, true);
    }
    hideAll() {
        this.levelGen.clearLevel();
        this.stage.removeChild(this.MainMenu);
        this.stage.removeChild(this.GameOver);
        this.stage.removeChild(this.HowToPlay);
    }
}
exports.ScreenManager = ScreenManager;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6011b48bd2314150ba88")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.489e00e26e05d05a2226.hot-update.js.map