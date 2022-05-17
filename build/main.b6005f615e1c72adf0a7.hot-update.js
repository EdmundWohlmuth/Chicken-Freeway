"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! createjs */ "./node_modules/createjs/builds/1.0.0/createjs.min.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const AssetManager_1 = __webpack_require__(/*! ./AssetManager */ "./src/AssetManager.ts");
const Chicken_1 = __webpack_require__(/*! ./Chicken */ "./src/Chicken.ts");
const Nest_1 = __webpack_require__(/*! ./Nest */ "./src/Nest.ts");
const UserInterface_1 = __webpack_require__(/*! ./UserInterface */ "./src/UserInterface.ts");
const ScreenManager_1 = __webpack_require__(/*! ./ScreenManager */ "./src/ScreenManager.ts");
const LevelGeneration_1 = __webpack_require__(/*! ./LevelGeneration */ "./src/LevelGeneration.ts");
let stage;
let canvas;
let assetManager;
let leftKey = false;
let rightKey = false;
let upKey = false;
let downKey = false;
let chicken;
let sportsCar;
let sedan;
let police;
let nest;
let screenManager;
let levelGeneration;
let userInterface;
let levelsCleared = 0;
let lives = 3;
function monitorKeys() {
    if (screenManager.inMenuBool == false) {
        if (upKey) {
            chicken.direction = Chicken_1.Chicken.UP;
            chicken.startMe();
        }
        else if (downKey) {
            chicken.direction = Chicken_1.Chicken.DOWN;
            chicken.startMe();
        }
        else if (leftKey) {
            chicken.direction = Chicken_1.Chicken.LEFT;
            chicken.startMe();
        }
        else if (rightKey) {
            chicken.direction = Chicken_1.Chicken.RIGHT;
            chicken.startMe();
        }
        else
            chicken.stopMe();
    }
}
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    chicken = new Chicken_1.Chicken(stage, assetManager);
    userInterface = new UserInterface_1.UserInterface(stage, assetManager);
    nest = new Nest_1.Nest(stage, assetManager, chicken);
    levelGeneration = new LevelGeneration_1.LevelGeneration(stage, assetManager, chicken, sportsCar, police, sedan, nest);
    screenManager = new ScreenManager_1.ScreenManager(stage, assetManager, levelGeneration);
    screenManager.showMainMenu();
    stage.on("nestReached", onGameEvent);
    stage.on("lifeDecrement", onGameEvent);
    stage.on("newLevel", onGameEvent);
    stage.on("gameReset", onGameEvent);
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
    function onGameEvent(e) {
        switch (e.type) {
            case "nestReached":
                levelsCleared++;
                userInterface.clears = levelsCleared;
                levelGeneration.genLevels();
                console.log("levelsClears: " + levelsCleared);
                break;
            case "lifeDecrement":
                lives--;
                userInterface.life = lives;
                console.log("Lives: " + lives);
                if (lives < 1) {
                    screenManager.showGameOver();
                    console.log("Game over");
                }
                break;
            case "lifeIncriment":
                break;
            case "gameReset":
                userInterface.resetMe();
                chicken.stageClear();
                levelGeneration.reset();
                lives = 3;
                console.log("reset succsessfully");
                console.log("Lives: " + lives);
                break;
            default:
                break;
        }
    }
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    monitorKeys();
    chicken.update();
    levelGeneration.update();
    nest.update();
    userInterface.update();
    stage.update();
}
function onKeyDown(e) {
    if (e.key == "w")
        upKey = true;
    else if (e.key == "s")
        downKey = true;
    else if (e.key == "a")
        leftKey = true;
    else if (e.key == "d")
        rightKey = true;
}
function onKeyUp(e) {
    if (e.key == "w")
        upKey = false;
    else if (e.key == "s")
        downKey = false;
    else if (e.key == "a")
        leftKey = false;
    else if (e.key == "d")
        rightKey = false;
    chicken.stopMe();
    chicken.runOnce = true;
}
function main() {
    canvas = document.getElementById("game-canvas");
    canvas.width = Constants_1.STAGE_WIDTH;
    canvas.height = Constants_1.STAGE_HEIGHT;
    stage = new createjs.StageGL(canvas, { antialias: true });
    assetManager = new AssetManager_1.AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    assetManager.loadAssets(Constants_1.ASSET_MANIFEST);
}
main();


/***/ }),

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
        this._sprite = assetManager.getSprite("sprites", "GameObjects/Nest", -20, -20);
        this.width = this._sprite.getBounds().width;
        this.nestReached = new createjs.Event("nestReached", true, false);
        stage.addChild(this._sprite);
    }
    positiionMe() {
        this._sprite.y = 70;
        this._sprite.x = (0, Toolkit_1.randomMe)(10, 480);
    }
    update() {
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            this.chicken.stageClear();
            this._sprite.dispatchEvent(this.nestReached);
        }
    }
}
exports.Nest = Nest;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c6dd83c8f053a063ba6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.b6005f615e1c72adf0a7.hot-update.js.map