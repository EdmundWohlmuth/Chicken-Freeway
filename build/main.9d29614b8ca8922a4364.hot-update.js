"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/CountDown.ts":
/*!**************************!*\
  !*** ./src/CountDown.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountDown = void 0;
class CountDown {
    constructor(stage, assetmanager) {
        this._seconds = 200;
    }
    get seconds() {
        return this._seconds;
    }
    start(startingSeconds) {
        this._seconds = startingSeconds;
    }
}
exports.CountDown = CountDown;


/***/ }),

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
const Corn1Up_1 = __webpack_require__(/*! ./Corn1Up */ "./src/Corn1Up.ts");
const CountDown_1 = __webpack_require__(/*! ./CountDown */ "./src/CountDown.ts");
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
let corn;
let train;
let countDown;
let screenManager;
let levelGeneration;
let userInterface;
let pointsGained = 0;
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
    corn = new Corn1Up_1.Corn1Up(stage, assetManager, chicken);
    levelGeneration = new LevelGeneration_1.LevelGeneration(stage, assetManager, chicken, sportsCar, police, sedan, nest, corn, train);
    screenManager = new ScreenManager_1.ScreenManager(stage, assetManager, levelGeneration);
    screenManager.showMainMenu();
    countDown = new CountDown_1.CountDown(stage, assetManager);
    countDown.start(200);
    stage.on("nestReached", onGameEvent);
    stage.on("lifeDecrement", onGameEvent);
    stage.on("newLevel", onGameEvent);
    stage.on("gameReset", onGameEvent);
    stage.on("lifeIncriment", onGameEvent);
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
    function onGameEvent(e) {
        switch (e.type) {
            case "nestReached":
                pointsGained = pointsGained + 100;
                userInterface.points = pointsGained;
                levelGeneration.genLevels();
                corn.new1Up();
                console.log("levelsClears: " + pointsGained);
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
                if (lives < 3) {
                    lives++;
                    userInterface.life = lives;
                    userInterface.addLivesUI();
                }
                pointsGained = pointsGained + 25;
                userInterface.points = pointsGained;
                console.log("Lives: " + lives);
                break;
            case "gameReset":
                pointsGained = 0;
                userInterface.resetMe();
                chicken.stageClear();
                levelGeneration.reset();
                lives = 3;
                levelGeneration.carSpeed = Constants_1.STARTING_CAR_SPEED;
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
    corn.update();
    stage.update();
    console.log(screenManager.inMenuBool);
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2384b8bec2bc36691999")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9d29614b8ca8922a4364.hot-update.js.map