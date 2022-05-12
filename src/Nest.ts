import { AssetManager } from "./AssetManager";
import { Chicken } from "./Chicken";
import { STAGE_WIDTH } from "./Constants";
import { boxHit, randomMe } from "./Toolkit";

export class Nest {

    private stage:createjs.StageGL;
    private width:number;
    private _sprite:createjs.Sprite;
    private chicken:Chicken;
    private nestReached:createjs.Event;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, chicken:Chicken) {       

        this.chicken = chicken;

        this._sprite = assetManager.getSprite("sprites", "GameObjects/Nest", -20, -20);
        this.width = this._sprite.getBounds().width; 
        
        this.nestReached = new createjs.Event("nestReached", true, false);

        stage.addChild(this._sprite);
    }

    public positiionMe():void {
        this._sprite.y = 70;
        this._sprite.x = randomMe(10, 480);
    }

    public update():void {
        if (boxHit(this._sprite, this.chicken.sprite)) {
            this.chicken.stageClear();
            this._sprite.dispatchEvent(this.nestReached);          
           // console.log("collssion");
        }
    }  
}