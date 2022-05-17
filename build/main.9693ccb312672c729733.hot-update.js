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
const SportsCar_1 = __webpack_require__(/*! ./SportsCar */ "./src/SportsCar.ts");
const Nest_1 = __webpack_require__(/*! ./Nest */ "./src/Nest.ts");
const Sedan_1 = __webpack_require__(/*! ./Sedan */ "./src/Sedan.ts");
const PoliceCar_1 = __webpack_require__(/*! ./PoliceCar */ "./src/PoliceCar.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
const UserInterface_1 = __webpack_require__(/*! ./UserInterface */ "./src/UserInterface.ts");
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
let yValue = 96;
let carArray = [];
let userInterface;
let levelsCleared = 0;
let instructions;
let startLane;
let laneOne;
let laneTwo;
let laneThree;
let laneFour;
let laneFive;
let laneSix;
function monitorKeys() {
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
function onReady(e) {
    console.log(">> spritesheet loaded – ready to add sprites to game");
    startLane = assetManager.getSprite("sprites", "Land Tiles/Dirt_M", 0, 576);
    stage.addChild(startLane);
    laneOne = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 480);
    stage.addChild(laneOne);
    laneTwo = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 384);
    stage.addChild(laneTwo);
    laneThree = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 288);
    stage.addChild(laneThree);
    laneFour = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 192);
    stage.addChild(laneFour);
    laneFive = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 96);
    stage.addChild(laneFive);
    laneSix = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 0);
    stage.addChild(laneSix);
    chicken = new Chicken_1.Chicken(stage, assetManager);
    userInterface = new UserInterface_1.UserInterface(stage, assetManager);
    stage.on("nestReached", onGameEvent);
    for (let i = 0; i < 9; i++) {
        if ((0, Toolkit_1.randomMe)(1, 4) == 1) {
            carArray.push(sportsCar = new SportsCar_1.SportsCar(stage, assetManager, chicken, yValue));
            sportsCar.positionMe();
        }
        else if ((0, Toolkit_1.randomMe)(1, 4) == 2) {
            carArray.push(sedan = new Sedan_1.Sedan(stage, assetManager, chicken, yValue));
            sedan.positionMe();
        }
        else {
            carArray.push(police = new PoliceCar_1.PoliceCar(stage, assetManager, chicken, yValue));
            police.positionMe();
        }
        if (yValue == 158)
            yValue = 261;
        yValue = yValue + 31;
        console.log(yValue);
    }
    instructions = assetManager.getSprite("sprites", "UI/Instructions", 125, 140);
    stage.addChild(instructions);
    nest = new Nest_1.Nest(stage, assetManager, chicken);
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
    function onGameEvent(e) {
        switch (e.type) {
            case "nestReached":
                for (let i = 0; i < carArray.length; i++) {
                    carArray[i].speed = carArray[i].speed + 0.25;
                }
                levelsCleared++;
                userInterface.clears = levelsCleared;
                console.log("levelsClears: " + levelsCleared);
                console.log("Speed: " + carArray[1].speed);
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
    for (let car of carArray) {
        car.update();
    }
    nest.update();
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
    stage.removeChild(instructions);
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
/******/ 	__webpack_require__.h = () => ("27f204d1fa03e3f26b7c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9693ccb312672c729733.hot-update.js.map