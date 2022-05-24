import { AssetManager } from "./AssetManager";
import { Train } from "./Train";
import { STAGE_WIDTH } from "./Constants";

export class StopLight {

    // variables
    private stage:createjs.StageGL;
    private _train:Train
    private trainWidth:number;
    private assetManager:AssetManager;

    private onSprite:createjs.Sprite;
    private offSprite:createjs.Sprite;
    private _sprite:createjs.Sprite;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, train:Train) {
        this.stage = stage;
        this._train = train;
        this.trainWidth = this._train.sprite.getBounds().width;
        this.assetManager = assetManager
    }

    get sprite() {
        return this._sprite;
    }

    public SwitchStates():void {

        if (this._train.sprite.x > - 500 && this._train.sprite.x < STAGE_WIDTH + this.trainWidth) {
            this._sprite = this.assetManager.getSprite("sprites", "Lights/Stop", 10, 350);
        }
        else {
            this._sprite = this.assetManager.getSprite("sprites", "Lights/Go", 10, 350);
        }
    }
}