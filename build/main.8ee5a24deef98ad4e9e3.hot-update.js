"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Chicken.ts":
/*!************************!*\
  !*** ./src/Chicken.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Chicken = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Chicken {
    constructor(stage, assetManager) {
        this._speed = Constants_1.CHICKEN_SPEED;
        this._state = Chicken.STATE_IDLE;
        this.stage = stage;
        this._direction = Chicken.UP;
        this._assetmanager = assetManager;
        this._sprite = assetManager.getSprite("sprites", "Chicken/Up", Constants_1.CHICKEN_START_X, Constants_1.CHICKEN_START_Y);
        this.width = this._sprite.getBounds().width;
        stage.addChild(this._sprite);
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
    set direction(value) {
        this._direction = value;
    }
    get direction() {
        return this._direction;
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    startMe() {
        if (this._state == Chicken.STATE_IDLE) {
            this._state = Chicken.STATE_MOVING;
        }
    }
    stopMe() {
        if (this._state == Chicken.STATE_MOVING) {
            this._state = Chicken.STATE_IDLE;
        }
    }
    update() {
        if (this._state == Chicken.STATE_MOVING) {
            let sprite = this._sprite;
            if (this._direction == Chicken.LEFT) {
                this._sprite = this._assetmanager.getSprite("sprites", "Chicken/Left", sprite.x, sprite.y);
                this._sprite.play();
                sprite.x = sprite.x - this._speed;
                if (sprite.x < 0) {
                    sprite.x = 0;
                }
            }
        }
    }
}
exports.Chicken = Chicken;
Chicken.UP = 0;
Chicken.RIGHT = 1;
Chicken.LEFT = 2;
Chicken.DOWN = 3;
Chicken.STATE_IDLE = 0;
Chicken.STATE_MOVING = 1;
Chicken.STATE_DEAD = 3;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dc4b55e898b86600f2ec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8ee5a24deef98ad4e9e3.hot-update.js.map