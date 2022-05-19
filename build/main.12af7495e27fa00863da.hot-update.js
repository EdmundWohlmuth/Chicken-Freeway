"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/UserInterface.ts":
/*!******************************!*\
  !*** ./src/UserInterface.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserInterface = void 0;
class UserInterface {
    constructor(stage, assetManager, countDown) {
        this.lives = 3;
        this.stage = stage;
        this.assetManager = assetManager;
        this.countDown = this.countDown;
        this.overlay = assetManager.getSprite("sprites", "UI/UI_Bar", 314, 1);
        stage.addChild(this.overlay);
        this.clearsText = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.clearsText.x = 400;
        this.clearsText.y = 45;
        this.clearsText.letterSpacing = 2;
        stage.addChild(this.clearsText);
        this.timeText = assetManager.getSprite("sprites", "UI/Time", 10, 45);
        stage.addChild(this.timeText);
        this.timerText = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.timerText.x = 70;
        this.timerText.y = 45;
        this.timerText.letterSpacing = 1.5;
        stage.addChild(this.timerText);
        this.score = assetManager.getSprite("sprites", "UI/Score", 325, 45);
        stage.addChild(this.score);
        this.lifeCounter1 = assetManager.getSprite("sprites", "UI/Life", 380, 18);
        this.lifeCounter2 = assetManager.getSprite("sprites", "UI/Life", (380 + 25), 18);
        this.lifeCounter3 = assetManager.getSprite("sprites", "UI/Life", (380 + 50), 18);
        stage.addChild(this.lifeCounter1);
        stage.addChild(this.lifeCounter2);
        stage.addChild(this.lifeCounter3);
        this.resetMe();
        console.log("lives: " + this.lives);
    }
    set points(value) {
        this.pointCount = value;
        this.clearsText.text = String(this.pointCount);
    }
    set timer(value) {
        this.time = value;
        this.timerText.text = String(this.time);
    }
    set life(value) {
        this.lives = value;
    }
    resetMe() {
        this.pointCount = 0;
        this.lives = 3;
        this.pointCount = 0;
        this.clearsText.text = String(this.pointCount);
        this.stage.addChild(this.lifeCounter1);
        this.stage.addChild(this.lifeCounter2);
        this.stage.addChild(this.lifeCounter3);
    }
    update() {
        if (this.lives == 2) {
            this.stage.removeChild(this.lifeCounter3);
        }
        else if (this.lives == 1) {
            this.stage.removeChild(this.lifeCounter2);
        }
        else if (this.lives == 0) {
            this.stage.removeChild(this.lifeCounter1);
        }
        else if (this.lives > 3)
            this.lives = 3;
        this.timerText.text = String(this.countDown.seconds);
    }
    addLivesUI() {
        if (this.lives == 3) {
            this.stage.addChild(this.lifeCounter3);
        }
        else if (this.lives == 2) {
            this.stage.addChild(this.lifeCounter2);
        }
    }
}
exports.UserInterface = UserInterface;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3cc0756a4bb1e8d19f15")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.12af7495e27fa00863da.hot-update.js.map