"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/LevelGeneration.ts":
/*!********************************!*\
  !*** ./src/LevelGeneration.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LevelGeneration = void 0;
class LevelGeneration {
    constructor(stage, assetManager) {
        this.stage = stage;
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
/******/ 	__webpack_require__.h = () => ("48c8925ae73e05c8a004")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4e1b1128a6adab303690.hot-update.js.map