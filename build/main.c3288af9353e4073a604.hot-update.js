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
const SportsCar_1 = __webpack_require__(/*! ./SportsCar */ "./src/SportsCar.ts");
const PoliceCar_1 = __webpack_require__(/*! ./PoliceCar */ "./src/PoliceCar.ts");
const Sedan_1 = __webpack_require__(/*! ./Sedan */ "./src/Sedan.ts");
class LevelGeneration {
    constructor(stage, assetManager, chicken, sportsCar, police, sedan) {
        this.carArray = [];
        this.yValue = 96;
        this.stage = stage;
        this.chicken = chicken;
        this.sportsCar = sportsCar;
        this.police = police;
        this.sedan = sedan;
        this.assetManager = assetManager;
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
                this.carArray.push(this.sportsCar = new SportsCar_1.SportsCar(this.stage, this.assetManager, this.chicken, this.yValue));
                this.sportsCar.positionMe();
                this.levelOne.addChild(this.sportsCar.sprite);
            }
            else if ((0, Toolkit_1.randomMe)(1, 4) == 2) {
                this.carArray.push(this.sedan = new Sedan_1.Sedan(this.stage, this.assetManager, this.chicken, this.yValue));
                this.sedan.positionMe();
                this.levelOne.addChild(this.sedan.sprite);
            }
            else {
                this.carArray.push(this.police = new PoliceCar_1.PoliceCar(this.stage, this.assetManager, this.chicken, this.yValue));
                this.police.positionMe();
                this.levelOne.addChild(this.police.sprite);
            }
            if (this.yValue == 158)
                this.yValue = 261;
            this.yValue = this.yValue + 31;
        }
    }
    genLevels() {
        this.clearLevel();
        let levelType = 1;
        this.yValue = 96;
        if (levelType == 1) {
            this.stage.addChildAt(this.levelOne, 0);
        }
        else if (levelType == 2) {
        }
        else if (levelType == 3) {
        }
        console.log("level " + levelType);
        console.log("Speed: " + this.carArray[1].speed);
    }
    update() {
        for (let car of this.carArray) {
            car.update();
        }
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
/******/ 	__webpack_require__.h = () => ("e8762790ca0d8d825d1b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c3288af9353e4073a604.hot-update.js.map