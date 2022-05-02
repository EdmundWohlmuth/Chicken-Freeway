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
    constructor(stage, assetManager, chicken) {
        this._speed = Constants_1.STARTING_CAR_SPEED;
        this.stage = stage;
        this._direction = Car.RIGHT;
        this.chicken = chicken;
        this._sprite = assetManager.getSprite("sprites", "Car/Left", 550, 300);
        this.width = this._sprite.getBounds().width;
    }
    get sprite() {
        return this._sprite;
    }
    positionMe() {
        if (this._direction = Car.LEFT) {
            this._sprite.gotoAndPlay("Car/Left");
        }
        else if (this._direction = Car.RIGHT) {
            this._sprite.gotoAndPlay("Car/Right");
        }
        this.stage.addChild(this._sprite);
    }
    update() {
        if (this._direction = Car.LEFT) {
            this._sprite.x = this._sprite.x - this._speed;
            if (this._sprite.x < 0 - this.width) {
                this._sprite.x = (Constants_1.STAGE_WIDTH + this.width);
            }
        }
        else if (this._direction = Car.RIGHT) {
            this._sprite.x = this._sprite.x + this._speed;
            if (this._sprite.x > (Constants_1.STAGE_WIDTH - this.width)) {
                this._sprite.x = 0;
            }
        }
        if ((0, Toolkit_1.boxHit)(this._sprite, chi))
            ;
    }
}
exports.Car = Car;
Car.RIGHT = 0;
Car.LEFT = 1;


/***/ }),

/***/ "./src/Toolkit.ts":
/*!************************!*\
  !*** ./src/Toolkit.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pointHit = exports.boxHit = exports.randomMe = void 0;
function randomMe(low, high) {
    let randomNum = 0;
    randomNum = Math.floor(Math.random() * (high - low + 1)) + low;
    return randomNum;
}
exports.randomMe = randomMe;
function boxHit(sprite1, sprite2) {
    let width1 = sprite1.getBounds().width;
    let height1 = sprite1.getBounds().height;
    let width2 = sprite2.getBounds().width;
    let height2 = sprite2.getBounds().height;
    if ((sprite1.x + width1 > sprite2.x) &&
        (sprite1.y + height1 > sprite2.y) &&
        (sprite1.x < sprite2.x + width2) &&
        (sprite1.y < sprite2.y + height2)) {
        return true;
    }
    else {
        return false;
    }
}
exports.boxHit = boxHit;
function pointHit(sprite1, sprite2, sprite1HitX = 0, sprite1HitY = 0, stage = null) {
    if (stage != null) {
        let markerPoint = sprite1.localToGlobal(sprite1HitX, sprite1HitY);
        let marker = new createjs.Shape();
        marker.graphics.beginFill("#FF00EC");
        marker.graphics.drawRect(0, 0, 4, 4);
        marker.regX = 2;
        marker.regY = 2;
        marker.x = markerPoint.x;
        marker.y = markerPoint.y;
        marker.cache(0, 0, 4, 4);
        stage.addChild(marker);
    }
    let point = sprite1.localToLocal(sprite1HitX, sprite1HitY, sprite2);
    if (sprite2.hitTest(point.x, point.y)) {
        return true;
    }
    else {
        return false;
    }
}
exports.pointHit = pointHit;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a05a1d6888a82bf411dc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0111059a1fdbb9b44b23.hot-update.js.map