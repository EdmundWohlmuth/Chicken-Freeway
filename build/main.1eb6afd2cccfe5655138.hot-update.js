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
    killMe() {
    }
    update() {
        if (this._state == Chicken.STATE_MOVING && this._state != Chicken.STATE_DEAD) {
            let sprite = this._sprite;
            if (this._direction == Chicken.LEFT) {
                sprite.x = sprite.x - this._speed;
                this.sprite.gotoAndPlay("Chicken/Left");
                if (sprite.x < 0) {
                    sprite.x = 0;
                }
            }
            else if (this._direction == Chicken.RIGHT) {
                sprite.x = sprite.x + this._speed;
                this.sprite.gotoAndPlay("Chicken/Right");
                if (sprite.x > (Constants_1.STAGE_WIDTH - this.width)) {
                    sprite.x = (Constants_1.STAGE_WIDTH - this.width);
                }
            }
            else if (this._direction == Chicken.UP) {
                sprite.y = sprite.y - this._speed;
                this.sprite.gotoAndPlay("Chicken/Up");
                if (sprite.y < 0) {
                    sprite.y = 0;
                }
            }
            else if (this._direction == Chicken.DOWN) {
                sprite.y = sprite.y + this._speed;
                this.sprite.gotoAndPlay("Chicken/Down");
                if (sprite.y > (Constants_1.STAGE_HEIGHT - this.width)) {
                    sprite.y = (Constants_1.STAGE_HEIGHT - this.width);
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
/******/ 	__webpack_require__.h = () => ("c7afb6c9818d1e468b6c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1eb6afd2cccfe5655138.hot-update.js.map