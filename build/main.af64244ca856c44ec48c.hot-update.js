"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Car.ts":
/*!********************!*\
  !*** ./src/Car.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Car = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Car {
    constructor(stage, assetManager, animationLeft, animationRight) {
        this._speed = Constants_1.STARTING_CAR_SPEED;
        this.stage = stage;
        this._animationLeft = animationLeft;
        this._animationRight = animationRight;
        this._sprite = assetManager.getSprite("sprites", animationLeft, 0, 0);
        this.width = this._sprite.getBounds().width;
    }
    get sprite() {
        return this._sprite;
    }
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value;
    }
    positionMe() {
        if ((0, Toolkit_1.randomMe)(1, 3) == 1)
            this._direction = Car.LEFT;
        else
            this._direction = Car.RIGHT;
        console.log("direction = " + this._direction);
        if (this._direction == Car.LEFT) {
            this._sprite.gotoAndPlay(this._animationLeft);
            this.sprite.x = (0, Toolkit_1.randomMe)((Constants_1.STAGE_WIDTH / 2), Constants_1.STAGE_WIDTH);
        }
        else {
            this._sprite.gotoAndPlay(this._animationRight);
            this.sprite.x = (0, Toolkit_1.randomMe)(0, (Constants_1.STAGE_WIDTH / 2));
        }
        this.stage.addChild(this._sprite);
    }
    update() {
        if (this._direction == Car.LEFT) {
            this._sprite.x = this._sprite.x - this._speed;
            if (this._sprite.x < 0 - this.width) {
                this._sprite.x = (Constants_1.STAGE_WIDTH + this.width);
            }
        }
        else if (this._direction == Car.RIGHT) {
            this._sprite.x = this._sprite.x + this._speed;
            if (this._sprite.x > (Constants_1.STAGE_WIDTH + this.width)) {
                this._sprite.x = (0 - this.width);
            }
        }
    }
}
exports.Car = Car;
Car.RIGHT = 0;
Car.LEFT = 1;


/***/ }),

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
    constructor(stage, assetManager) {
        this.carArray = [];
        this.yValue = 96;
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
                this.carArray.push(sportsCar = new SportsCar_1.SportsCar(stage, assetManager, chicken, this.yValue));
                sportsCar.positionMe();
            }
            else if ((0, Toolkit_1.randomMe)(1, 4) == 2) {
                this.carArray.push(sedan = new Sedan_1.Sedan(stage, assetManager, chicken, this.yValue));
                sedan.positionMe();
            }
            else {
                this.carArray.push(this.police = new PoliceCar_1.PoliceCar(stage, assetManager, chicken, this.yValue));
                police.positionMe();
            }
            if (this.yValue == 158)
                this.yValue = 261;
            this.yValue = this.yValue + 31;
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


/***/ }),

/***/ "./src/PoliceCar.ts":
/*!**************************!*\
  !*** ./src/PoliceCar.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PoliceCar = void 0;
const Car_1 = __webpack_require__(/*! ./Car */ "./src/Car.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class PoliceCar extends Car_1.Car {
    constructor(stage, assetManager, chicken, YCoord) {
        super(stage, assetManager, "Police/Left", "Police/Right");
        this.chicken = chicken;
        this.sprite.y = YCoord;
    }
    update() {
        super.update();
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            this.chicken.killMe();
        }
    }
}
exports.PoliceCar = PoliceCar;


/***/ }),

/***/ "./src/Sedan.ts":
/*!**********************!*\
  !*** ./src/Sedan.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sedan = void 0;
const Car_1 = __webpack_require__(/*! ./Car */ "./src/Car.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Sedan extends Car_1.Car {
    constructor(stage, assetManager, chicken, YCoord) {
        super(stage, assetManager, "Sedan/Left", "Sedan/Right");
        this.chicken = chicken;
        this.sprite.y = YCoord;
    }
    update() {
        super.update();
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            this.chicken.killMe();
        }
    }
}
exports.Sedan = Sedan;


/***/ }),

/***/ "./src/SportsCar.ts":
/*!**************************!*\
  !*** ./src/SportsCar.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SportsCar = void 0;
const Car_1 = __webpack_require__(/*! ./Car */ "./src/Car.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class SportsCar extends Car_1.Car {
    constructor(stage, assetManager, chicken, YCoord) {
        super(stage, assetManager, "Car/Left", "Car/Right");
        this.chicken = chicken;
        this.sprite.y = YCoord;
    }
    update() {
        super.update();
        if ((0, Toolkit_1.boxHit)(this._sprite, this.chicken.sprite)) {
            this.chicken.killMe();
        }
    }
}
exports.SportsCar = SportsCar;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bad881fb3075890c0ecf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.af64244ca856c44ec48c.hot-update.js.map