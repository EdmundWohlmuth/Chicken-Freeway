import { AssetManager } from "./AssetManager";
import { CountDown } from "./CountDown";

export class UserInterface {

    // private variables
    private stage:createjs.StageGL;
    private assetManager:AssetManager;
    private countDown:CountDown;

    private pointCount:number;
    private clearsText:createjs.BitmapText;

    private lives:number = 3;
    private lifeCounter1:createjs.Sprite;
    private lifeCounter2:createjs.Sprite;
    private lifeCounter3:createjs.Sprite;
    private overlay:createjs.Sprite;

    private score:createjs.Sprite;
    private timeText:createjs.Sprite;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, countDown:CountDown) {
        this.stage = stage;
        this.assetManager = assetManager
        this.countDown = this.countDown

        // overlay sprite
        this.overlay = assetManager.getSprite("sprites", "UI/UI_Bar", 314, 1);
        stage.addChild(this.overlay);

        // score glyphs
        this.clearsText = new createjs.BitmapText("0", assetManager.getSpriteSheet("glyphs"));
        this.clearsText.x = 400;
        this.clearsText.y = 45;
        this.clearsText.letterSpacing = 2;
        stage.addChild(this.clearsText);

        // timer sprite
        this.timeText = assetManager.getSprite("sprites", "UI/Time", 5, 45);
        stage.addChild(this.timeText);

        // score UI
        this.score = assetManager.getSprite("sprites", "UI/Score", 325, 45);
        stage.addChild(this.score);

        // lives UI
        this.lifeCounter1 = assetManager.getSprite("sprites", "UI/Life", 380, 18);
        this.lifeCounter2 = assetManager.getSprite("sprites", "UI/Life", (380 + 25), 18);
        this.lifeCounter3 = assetManager.getSprite("sprites", "UI/Life", (380 + 50), 18);
        stage.addChild(this.lifeCounter1);
        stage.addChild(this.lifeCounter2);
        stage.addChild(this.lifeCounter3);

        // initialisation
        this.resetMe();

        console.log("lives: " + this.lives)
    }

    // ------------------------- gets / sets -----------------------------------
    public set points(value:number) {
        this.pointCount = value;

        // update bitmapText object
        this.clearsText.text = String(this.pointCount);
    }

    public set life(value:number) {
        this.lives = value;
    }

    // ----------------------- public meathods ---------------------------------
    public resetMe():void {
        this.pointCount = 0;
        this.lives = 3;
        this.pointCount = 0;
        this.clearsText.text = String(this.pointCount);
        this.stage.addChild(this.lifeCounter1);
        this.stage.addChild(this.lifeCounter2);
        this.stage.addChild(this.lifeCounter3);
    }

    public update():void {
        if (this.lives == 2) {
            this.stage.removeChild(this.lifeCounter3);
        }
        else if (this.lives == 1) {
            this.stage.removeChild(this.lifeCounter2);
        }
        else if (this.lives == 0) {
            this.stage.removeChild(this.lifeCounter1);
        }
        else if (this.lives > 3) this.lives = 3;
    }

    public addLivesUI():void { // this adds the egg element to the UI on getting a 1Up
        if (this.lives == 3) {
            this.stage.addChild(this.lifeCounter3);
        }
        else if (this.lives == 2) {
            this.stage.addChild(this.lifeCounter2);
        }
    }
}