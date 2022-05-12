import { AssetManager } from "./AssetManager";
import { boxHit, randomMe } from "./Toolkit";
import { Chicken } from "./Chicken";

export class Corn1Up {
    // private variables
    private stage:createjs.StageGL;
    private _sprite:createjs.Sprite;
    private chicken:Chicken
    private width:number;
    private lifeIncriment:createjs.Event;
    
    constructor(stage:createjs.StageGL, assetManager:AssetManager, chicken:Chicken) {
        this.stage = stage;
        this.chicken = chicken;

        this._sprite = assetManager.getSprite("sprites", "GameObjects/1Up", -15, -15);
        this.width = this._sprite.getBounds().width;

        this.lifeIncriment = new createjs.Event("lifeIncriment", true, false);

        this.stage.addChild(this._sprite);         
    }

    // ----------------------------- event handlers ----------------------------------

    // ----------------------------- public meathods ---------------------------------

    public positionMe():void {
        this._sprite.x = randomMe(10, 480);
        this._sprite.y = randomMe(96, 384);
    }

    public new1Up():void {
        this.stage.addChild(this._sprite);
        this.positionMe();
    }

    public update():void {
        if(boxHit(this._sprite, this.chicken.sprite)) {
            this.stage.removeChild(this._sprite);
            this._sprite.x = -15;
            this._sprite.y= -15;
            this.stage.dispatchEvent("lifeIncriment");
            console.log("1Up get");
        }
    }
}