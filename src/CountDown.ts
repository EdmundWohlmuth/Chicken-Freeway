import { AssetManager } from "./AssetManager";
import { COUNTDOWN_TIME } from "./Constants";
import { UserInterface } from "./UserInterface";

export class CountDown {

    private timer:number;
    private _seconds:number;
    private timerText:createjs.BitmapText;

    private userInterface:UserInterface

    constructor (stage:createjs.StageGL, assetManager:AssetManager) {

        this._seconds = COUNTDOWN_TIME;

        // timer glyphs
        this.timerText = new createjs.BitmapText("150", assetManager.getSpriteSheet("glyphs"));
        this.timerText.x = 60;
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
            if (this._seconds > 0) {
                this._seconds--;
                console.log("Count down: " + this._seconds);
                this.timerText.text = String(this._seconds);
            }          
        }, 1000);
    }

    public reset():void {
        this._seconds = COUNTDOWN_TIME;
    }
}