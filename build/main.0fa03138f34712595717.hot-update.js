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
        this.lifeDecrement = new createjs.Event("lifeDecrement", true, false);
        this.runOnce = true;
        this._sprite = assetManager.getSprite("sprites", "Chicken/Up", Constants_1.CHICKEN_START_X, Constants_1.CHICKEN_START_Y);
        this.width = this._sprite.getBounds().width;
        this._deadSprite = assetManager.getSprite("sprites", "Chicken/Dead");
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
            this._sprite.stop();
        }
    }
    killMe() {
        let sprite = this._sprite;
        this._state = Chicken.STATE_DEAD;
        this._sprite.dispatchEvent(this.lifeDecrement);
        this._deadSprite.x = sprite.x;
        this._deadSprite.y = sprite.y;
        this.stage.addChild(this._deadSprite);
        sprite.x = Constants_1.CHICKEN_START_X;
        sprite.y = Constants_1.CHICKEN_START_Y;
        this._state = Chicken.STATE_IDLE;
    }
    update() {
        if (this._state == Chicken.STATE_MOVING && this._state != Chicken.STATE_DEAD) {
            let sprite = this._sprite;
            if (this._direction == Chicken.LEFT) {
                sprite.x = sprite.x - this._speed;
                if (this.runOnce) {
                    this.sprite.gotoAndPlay("Chicken/Left");
                    this.runOnce = false;
                }
                if (sprite.x < 0) {
                    sprite.x = 0;
                }
            }
            else if (this._direction == Chicken.RIGHT) {
                sprite.x = sprite.x + this._speed;
                if (this.runOnce) {
                    this.sprite.gotoAndPlay("Chicken/Right");
                    this.runOnce = false;
                }
                if (sprite.x > (Constants_1.STAGE_WIDTH - this.width)) {
                    sprite.x = (Constants_1.STAGE_WIDTH - this.width);
                }
            }
            else if (this._direction == Chicken.UP) {
                sprite.y = sprite.y - this._speed;
                if (this.runOnce) {
                    this.sprite.gotoAndPlay("Chicken/Up");
                    this.runOnce = false;
                }
                if (sprite.y < 0) {
                    sprite.y = 0;
                }
            }
            else if (this._direction == Chicken.DOWN) {
                sprite.y = sprite.y + this._speed;
                if (this.runOnce) {
                    this.sprite.gotoAndPlay("Chicken/Down");
                    this.runOnce = false;
                }
                if (sprite.y > (Constants_1.STAGE_HEIGHT - this.width)) {
                    sprite.y = (Constants_1.STAGE_HEIGHT - this.width);
                }
            }
        }
    }
    stageClear() {
        let sprite = this._sprite;
        sprite.x = Constants_1.CHICKEN_START_X;
        sprite.y = Constants_1.CHICKEN_START_Y;
        this.stage.removeChild(this._deadSprite);
    }
    hideCookedChocken() {
        this._deadSprite.x = -15;
        this._deadSprite.y = -15;
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
/******/ 	__webpack_require__.h = () => ("a5f1e778f014c3eb9cc3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0fa03138f34712595717.hot-update.js.map