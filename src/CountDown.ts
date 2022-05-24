import { AssetManager } from "./AssetManager";
import { COUNTDOWN_TIME } from "./Constants";
import { ScreenManager } from "./ScreenManager";

export class CountDown {

    private timer:number;
    private _seconds:number;
    private timerText:createjs.BitmapText;

    private screenManager:ScreenManager;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, screenManager:ScreenManager) {

        this._seconds = COUNTDOWN_TIME;

        this.screenManager = screenManager;

        // timer glyphs
        this.timerText = new createjs.BitmapText("150", assetManager.getSpriteSheet("glyphs"));
        this.timerText.x = 150;
        this.timerText.y = 45;
        this.timerText.letterSpacing = 1.5;
        stage.addChild(this.timerText);
    }

    // ----------------------------- gets / sets ---------------------------------
    get seconds() {
        return this._seconds;
    }

    set seconds(value:number) {
        this._seconds = value;

        this.timerText.text = String(value);
    }

    // --------------------------- public meathods -------------------------------
    public start(startingSeconds:number):void {
        this._seconds = startingSeconds;

        this.timer = window.setInterval(() => {
            if (this._seconds > 0 && !this.screenManager.inMenuBool) {
                this._seconds--;
               // console.log("Count down: " + this._seconds);
                this.timerText.text = String(this._seconds);
            }          
        }, 1000);
    }

    public reset():void {
        this._seconds = COUNTDOWN_TIME;
    }
}