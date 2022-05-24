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
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const LargeRock_1 = __webpack_require__(/*! ./LargeRock */ "./src/LargeRock.ts");
const NormalRock_1 = __webpack_require__(/*! ./NormalRock */ "./src/NormalRock.ts");
const Tree_1 = __webpack_require__(/*! ./Tree */ "./src/Tree.ts");
const Bush_1 = __webpack_require__(/*! ./Bush */ "./src/Bush.ts");
const Train_1 = __webpack_require__(/*! ./Train */ "./src/Train.ts");
const StopLight_1 = __webpack_require__(/*! ./StopLight */ "./src/StopLight.ts");
class LevelGeneration {
    constructor(stage, assetManager, chicken, sportsCar, police, sedan, nest, corn, train, stopLight) {
        this.carArray = [];
        this.obstacleArray = [];
        this.yValue = 96;
        this.carSpeedBonus = 5;
        this.stage = stage;
        this.chicken = chicken;
        this.sportsCar = sportsCar;
        this.police = police;
        this.sedan = sedan;
        this.nest = nest;
        this.corn = corn;
        this.train = train;
        this.stopLight = stopLight;
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
        this.levelTwo = new createjs.Container;
        this.startLane = assetManager.getSprite("sprites", "Land Tiles/Dirt_M", 0, 576);
        this.levelTwo.addChild(this.startLane);
        this.laneOne = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 480);
        this.levelTwo.addChild(this.laneOne);
        this.laneTwo = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 384);
        this.levelTwo.addChild(this.laneTwo);
        this.laneThree = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 288);
        this.levelTwo.addChild(this.laneThree);
        this.laneFour = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 192);
        this.levelTwo.addChild(this.laneFour);
        this.laneFive = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 96);
        this.levelTwo.addChild(this.laneFive);
        this.laneSix = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 0);
        this.levelTwo.addChild(this.laneSix);
        this.levelThree = new createjs.Container;
        this.startLane = assetManager.getSprite("sprites", "Land Tiles/Dirt_M", 0, 576);
        this.levelThree.addChild(this.startLane);
        this.laneOne = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 480);
        this.levelThree.addChild(this.laneOne);
        this.laneTwo = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 384);
        this.levelThree.addChild(this.laneTwo);
        this.laneThree = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 288);
        this.levelThree.addChild(this.laneThree);
        this.laneFour = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 192);
        this.levelThree.addChild(this.laneFour);
        this.laneFive = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 96);
        this.levelThree.addChild(this.laneFive);
        this.laneSix = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 0);
        this.levelThree.addChild(this.laneSix);
        this.levelFour = new createjs.Container;
        this.startLane = assetManager.getSprite("sprites", "Land Tiles/Dirt_M", 0, 576);
        this.levelFour.addChild(this.startLane);
        this.laneOne = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 480);
        this.levelFour.addChild(this.laneOne);
        this.laneTwo = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 384);
        this.levelFour.addChild(this.laneTwo);
        this.laneThree = assetManager.getSprite("sprites", "Land Tiles/Dirt_LG", 0, 288);
        this.levelFour.addChild(this.laneThree);
        this.trainTrack = assetManager.getSprite("sprites", "Land Tiles/Tracks", 0, 305);
        this.levelFour.addChild(this.trainTrack);
        this.laneFour = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 192);
        this.levelFour.addChild(this.laneFour);
        this.laneFive = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 96);
        this.levelFour.addChild(this.laneFive);
        this.laneSix = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 0);
        this.levelFour.addChild(this.laneSix);
    }
    get carSpeed() {
        return this.carSpeedBonus;
    }
    set carSpeed(value) {
        this.carSpeedBonus = value;
    }
    genLevels() {
        this.clearLevel();
        this.levelType = (0, Toolkit_1.randomMe)(1, 4);
        if (this.levelType == 1) {
            this.stage.addChildAt(this.levelOne, 0);
            this.yValue = 96;
            for (let i = 0; i < 9; i++) {
                let carType = (0, Toolkit_1.randomMe)(1, 3);
                if (carType == 1) {
                    this.carArray.push(this.sportsCar = new SportsCar_1.SportsCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sportsCar.positionMe();
                    this.levelOne.addChild(this.sportsCar.sprite);
                }
                else if (carType == 2) {
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
            for (let i = 0; i < 20; i++) {
                let obstacleType = (0, Toolkit_1.randomMe)(1, 4);
                let newYPos = (0, Toolkit_1.randomMe)(1, 2);
                if (newYPos == 1)
                    this.yValue = (0, Toolkit_1.randomMe)(480, 510);
                else if (newYPos == 2)
                    this.yValue = (0, Toolkit_1.randomMe)(192, 220);
                if (obstacleType == 1) {
                    this.obstacleArray.push(this.largeRock = new LargeRock_1.LargeRock(this.stage, this.assetManager, this.chicken));
                    this.largeRock.positionMe(this.yValue);
                    this.levelOne.addChild(this.largeRock.sprite);
                }
                else if (obstacleType == 2) {
                    this.obstacleArray.push(this.normalRock = new NormalRock_1.NormalRock(this.stage, this.assetManager, this.chicken));
                    this.normalRock.positionMe(this.yValue);
                    this.levelOne.addChild(this.normalRock.sprite);
                }
                else if (obstacleType == 3) {
                    this.obstacleArray.push(this.tree = new Tree_1.Tree(this.stage, this.assetManager, this.chicken));
                    this.tree.positionMe(this.yValue);
                    this.levelOne.addChild(this.tree.sprite);
                }
                else if (obstacleType == 4) {
                    this.obstacleArray.push(this.bush = new Bush_1.Bush(this.stage, this.assetManager, this.chicken));
                    this.bush.positionMe(this.yValue);
                    this.levelOne.addChild(this.bush.sprite);
                }
            }
        }
        else if (this.levelType == 2) {
            this.stage.addChildAt(this.levelTwo, 0);
            this.yValue = 96;
            for (let i = 0; i < 9; i++) {
                let carType = (0, Toolkit_1.randomMe)(1, 3);
                if (carType == 1) {
                    this.carArray.push(this.sportsCar = new SportsCar_1.SportsCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sportsCar.positionMe();
                    this.levelTwo.addChild(this.sportsCar.sprite);
                }
                else if (carType == 2) {
                    this.carArray.push(this.sedan = new Sedan_1.Sedan(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sedan.positionMe();
                    this.levelTwo.addChild(this.sedan.sprite);
                }
                else {
                    this.carArray.push(this.police = new PoliceCar_1.PoliceCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.police.positionMe();
                    this.levelTwo.addChild(this.police.sprite);
                }
                if (this.yValue == 158)
                    this.yValue = 257;
                else if (this.yValue == 350)
                    this.yValue = 449;
                this.yValue = this.yValue + 31;
            }
            for (let i = 0; i < 20; i++) {
                let obstacleType = (0, Toolkit_1.randomMe)(1, 4);
                let newYPos = (0, Toolkit_1.randomMe)(1, 2);
                if (newYPos == 1)
                    this.yValue = (0, Toolkit_1.randomMe)(384, 430);
                else if (newYPos == 2)
                    this.yValue = (0, Toolkit_1.randomMe)(192, 220);
                if (obstacleType == 1) {
                    this.obstacleArray.push(this.largeRock = new LargeRock_1.LargeRock(this.stage, this.assetManager, this.chicken));
                    this.largeRock.positionMe(this.yValue);
                    this.levelTwo.addChild(this.largeRock.sprite);
                }
                else if (obstacleType == 2) {
                    this.obstacleArray.push(this.normalRock = new NormalRock_1.NormalRock(this.stage, this.assetManager, this.chicken));
                    this.normalRock.positionMe(this.yValue);
                    this.levelTwo.addChild(this.normalRock.sprite);
                }
                else if (obstacleType == 3) {
                    this.obstacleArray.push(this.tree = new Tree_1.Tree(this.stage, this.assetManager, this.chicken));
                    this.tree.positionMe(this.yValue);
                    this.levelTwo.addChild(this.tree.sprite);
                }
                else if (obstacleType == 4) {
                    this.obstacleArray.push(this.bush = new Bush_1.Bush(this.stage, this.assetManager, this.chicken));
                    this.bush.positionMe(this.yValue);
                    this.levelTwo.addChild(this.bush.sprite);
                }
            }
        }
        else if (this.levelType == 3) {
            this.stage.addChildAt(this.levelThree, 0);
            this.yValue = 192;
            for (let i = 0; i < 9; i++) {
                let carType = (0, Toolkit_1.randomMe)(1, 3);
                if (carType == 1) {
                    this.carArray.push(this.sportsCar = new SportsCar_1.SportsCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sportsCar.positionMe();
                    this.levelThree.addChild(this.sportsCar.sprite);
                }
                else if (carType == 2) {
                    this.carArray.push(this.sedan = new Sedan_1.Sedan(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sedan.positionMe();
                    this.levelThree.addChild(this.sedan.sprite);
                }
                else {
                    this.carArray.push(this.police = new PoliceCar_1.PoliceCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.police.positionMe();
                    this.levelThree.addChild(this.police.sprite);
                }
                this.yValue = this.yValue + 31;
            }
            for (let i = 0; i < 20; i++) {
                let obstacleType = (0, Toolkit_1.randomMe)(1, 4);
                let newYPos = (0, Toolkit_1.randomMe)(1, 2);
                if (newYPos == 1)
                    this.yValue = (0, Toolkit_1.randomMe)(96, 120);
                else if (newYPos == 2)
                    this.yValue = (0, Toolkit_1.randomMe)(490, 520);
                if (obstacleType == 1) {
                    this.obstacleArray.push(this.largeRock = new LargeRock_1.LargeRock(this.stage, this.assetManager, this.chicken));
                    this.largeRock.positionMe(this.yValue);
                    this.levelThree.addChild(this.largeRock.sprite);
                }
                else if (obstacleType == 2) {
                    this.obstacleArray.push(this.normalRock = new NormalRock_1.NormalRock(this.stage, this.assetManager, this.chicken));
                    this.normalRock.positionMe(this.yValue);
                    this.levelThree.addChild(this.normalRock.sprite);
                }
                else if (obstacleType == 3) {
                    this.obstacleArray.push(this.tree = new Tree_1.Tree(this.stage, this.assetManager, this.chicken));
                    this.tree.positionMe(this.yValue);
                    this.levelThree.addChild(this.tree.sprite);
                }
                else if (obstacleType == 4) {
                    this.obstacleArray.push(this.bush = new Bush_1.Bush(this.stage, this.assetManager, this.chicken));
                    this.bush.positionMe(this.yValue);
                    this.levelThree.addChild(this.bush.sprite);
                }
            }
        }
        else if (this.levelType == 4) {
            this.stage.addChildAt(this.levelFour, 0);
            this.yValue = 96;
            for (let i = 0; i < 9; i++) {
                let carType = (0, Toolkit_1.randomMe)(1, 3);
                if (carType == 1) {
                    this.carArray.push(this.sportsCar = new SportsCar_1.SportsCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sportsCar.positionMe();
                    this.sportsCar.speed = this.carSpeed + 0.5;
                    this.levelFour.addChild(this.sportsCar.sprite);
                }
                else if (carType == 2) {
                    this.carArray.push(this.sedan = new Sedan_1.Sedan(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sedan.positionMe();
                    this.sedan.speed = this.carSpeed - 0.5;
                    this.levelFour.addChild(this.sedan.sprite);
                }
                else {
                    this.carArray.push(this.police = new PoliceCar_1.PoliceCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.police.positionMe();
                    this.levelFour.addChild(this.police.sprite);
                }
                if (this.yValue == 158)
                    this.yValue = 354;
                else if (this.yValue == 447)
                    this.yValue = 800;
                this.yValue = this.yValue + 31;
            }
            for (let i = 0; i < 20; i++) {
                let obstacleType = (0, Toolkit_1.randomMe)(1, 4);
                let newYPos = (0, Toolkit_1.randomMe)(1, 2);
                if (newYPos == 1)
                    this.yValue = (0, Toolkit_1.randomMe)(480, 510);
                else if (newYPos == 2)
                    this.yValue = (0, Toolkit_1.randomMe)(192, 220);
                if (obstacleType == 1) {
                    this.obstacleArray.push(this.largeRock = new LargeRock_1.LargeRock(this.stage, this.assetManager, this.chicken));
                    this.largeRock.positionMe(this.yValue);
                    this.levelFour.addChild(this.largeRock.sprite);
                }
                else if (obstacleType == 2) {
                    this.obstacleArray.push(this.normalRock = new NormalRock_1.NormalRock(this.stage, this.assetManager, this.chicken));
                    this.normalRock.positionMe(this.yValue);
                    this.levelFour.addChild(this.normalRock.sprite);
                }
                else if (obstacleType == 3) {
                    this.obstacleArray.push(this.tree = new Tree_1.Tree(this.stage, this.assetManager, this.chicken));
                    this.tree.positionMe(this.yValue);
                    this.levelFour.addChild(this.tree.sprite);
                }
                else if (obstacleType == 4) {
                    this.obstacleArray.push(this.bush = new Bush_1.Bush(this.stage, this.assetManager, this.chicken));
                    this.bush.positionMe(this.yValue);
                    this.levelFour.addChild(this.bush.sprite);
                }
            }
            this.train = new Train_1.Train(this.stage, this.assetManager, this.chicken);
            this.train.positionMe();
            this.levelFour.addChild(this.train.sprite);
            this.stopLight = new StopLight_1.StopLight(this.stage, this.assetManager, this.train);
            this.levelFour.addChild(this.stopLight.sprite);
        }
        for (let i = 0; i < this.carArray.length; i++) {
            this.carArray[i].speed = this.carSpeedBonus + Constants_1.CAR_SPEED_INCREASE;
        }
        console.log("level " + this.levelType);
        console.log("Speed: " + this.carArray[1].speed);
        this.nest.positiionMe();
        this.corn.positionMe();
    }
    update() {
        for (let car of this.carArray) {
            car.update();
        }
        for (let obstacle of this.obstacleArray) {
            obstacle.update();
        }
        if (this.levelType == 4) {
            this.train.update();
            this.stopLight.SwitchStates();
        }
    }
    clearLevel() {
        this.stage.removeChild(this.levelOne);
        this.stage.removeChild(this.levelTwo);
        this.stage.removeChild(this.levelThree);
        this.stage.removeChild(this.levelFour);
        for (let i = 0; i < this.carArray.length; i++) {
            this.carSpeedBonus = this.carArray[1].speed;
            this.levelOne.removeChild(this.carArray[i].sprite);
            this.levelTwo.removeChild(this.carArray[i].sprite);
            this.levelThree.removeChild(this.carArray[i].sprite);
            this.levelFour.removeChild(this.carArray[i].sprite);
        }
        for (let i = 0; i < this.obstacleArray.length; i++) {
            this.levelOne.removeChild(this.obstacleArray[i].sprite);
            this.levelTwo.removeChild(this.obstacleArray[i].sprite);
            this.levelThree.removeChild(this.obstacleArray[i].sprite);
            this.levelFour.removeChild(this.obstacleArray[i].sprite);
        }
        if (this.levelType == 4) {
            this.levelFour.removeChild(this.train.sprite);
            this.levelFour.removeChild(this.stopLight.sprite);
        }
        this.carArray = [];
        this.obstacleArray = [];
    }
    reset() {
        for (let i = 0; i < this.carArray.length; i++) {
            this.carArray[i].speed = Constants_1.STARTING_CAR_SPEED;
        }
        console.log("Level Rest");
    }
}
exports.LevelGeneration = LevelGeneration;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a2768da7ab0f0f0161bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.49a016daf93071f21bae.hot-update.js.map