import { AssetManager } from "./AssetManager";
import { Chicken } from "./Chicken";
import { boxHit } from "./Toolkit";

export class Nest {

    private stage:createjs.StageGL;
    private width:number;
    private _sprite:createjs.Sprite;
    private chicken:Chicken;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, chicken:Chicken) {       

        this.chicken = chicken;

        this._sprite = assetManager.getSprite("sprites", "GameObjects/Nest", 10, 10);
        this.width = this._sprite.getBounds().width;     

        stage.addChild(this._sprite);
    }

    public update():void {
        if (boxHit(this._sprite, this.chicken.sprite)) {
            this.chicken.stageClear();
            console.log("collssion");
        }
    }
    
}