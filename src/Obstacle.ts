import { AssetManager } from "./AssetManager";
import { STAGE_WIDTH } from "./Constants";
import { randomMe } from "./Toolkit";

export class Obstacle {
    // private varibles
    private stage:createjs.StageGL;
    private objectSprite:string;
    private _sprite:createjs.Sprite;
    private width:number;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, objectSprite:string) {
        this.stage = stage;
        this.objectSprite = objectSprite;

        //sprite
        this._sprite = assetManager.getSprite("sprites", objectSprite, 0, 0);
        this.width = this._sprite.getBounds().width;

    }

    // ------------------------ gets / sets ---------------------------------------
    get sprite() {
        return this._sprite;
    }

    // ------------------------- public meathods ----------------------------------

    public positionMe(yPosition:number):void {

        this._sprite.x = randomMe(10, (STAGE_WIDTH - 10));
        this.sprite.y = yPosition;

        this.stage.addChild(this._sprite);
    }
    public update():void {
        
    }

}