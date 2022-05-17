"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/LevelGeneration.ts":
/*!********************************!*\
  !*** ./src/LevelGeneration.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LevelGeneration = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class LevelGeneration {
    constructor(stage, assetManager) {
        this.carArray = [];
        this.stage = stage;
        this.levelOne = new createjs.Container;
        this.startLane = assetManager.getSprite("sprites", "Land Tiles/Dirt_M", 0, 576);
        this.levelOne.addChild(this.startLane);
        this.laneOne = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 480);
        this.levelOne.addChild(this.laneOne);
        this.laneTwo = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 384);
        this.levelOne.addChild(this.laneTwo);
        this.laneThree = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 288);
        this.levelOne.addChild(this.laneThree);
        this.laneFour = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 192);
        this.levelOne.addChild(this.laneFour);
        this.laneFive = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 96);
        this.levelOne.addChild(this.laneFive);
        this.laneSix = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 0);
        this.levelOne.addChild(this.laneSix);
        for (let i = 0; i < 9; i++) {
            if ((0, Toolkit_1.randomMe)(1, 4) == 1) {
                this.carArray.push(sportsCar = new SportsCar(stage, assetManager, chicken, yValue));
                sportsCar.positionMe();
            }
            else if ((0, Toolkit_1.randomMe)(1, 4) == 2) {
                this.carArray.push(sedan = new Sedan(stage, assetManager, chicken, yValue));
                sedan.positionMe();
            }
            else {
                this.carArray.push(this.police = new PoliceCar(stage, assetManager, chicken, yValue));
                police.positionMe();
            }
            if (yValue == 158)
                yValue = 261;
            yValue = yValue + 31;
        }
    }
    genLevels() {
        this.clearLevel();
        let levelType = 1;
        if (levelType == 1) {
            this.stage.addChildAt(this.levelOne, 0);
        }
        else if (levelType == 2) {
        }
        else if (levelType == 3) {
        }
        console.log("level " + levelType);
    }
    update() {
    }
    clearLevel() {
        this.stage.removeChild(this.levelOne);
        this.stage.removeChild(this.levelTwo);
        this.stage.removeChild(this.levelThree);
    }
}
exports.LevelGeneration = LevelGeneration;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6dd01fd0c825b92bcb72")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2b9e1eb7d5f84b554ad4.hot-update.js.map