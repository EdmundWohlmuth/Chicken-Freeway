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
const Car_1 = __webpack_require__(/*! ./Car */ "./src/Car.ts");
const Nest_1 = __webpack_require__(/*! ./Nest */ "./src/Nest.ts");
let stage;
let canvas;
let assetManager;
let leftKey = false;
let rightKey = false;
let upKey = false;
let downKey = false;
let chicken;
let car;
let nest;
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
    nest = new Nest_1.Nest(stage, assetManager, chicken);
    chicken = new Chicken_1.Chicken(stage, assetManager);
    car = new Car_1.Car(stage, assetManager, chicken);
    car.positionMe();
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    monitorKeys();
    chicken.update();
    nest.update();
    car.update();
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
/******/ 	__webpack_require__.h = () => ("2c7ce9b8d14291829d0c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.76e3bc67c68e0f3752d1.hot-update.js.map