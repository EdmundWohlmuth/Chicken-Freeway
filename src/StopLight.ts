import { AssetManager } from "./AssetManager";
import { Train } from "./Train";
import { STAGE_WIDTH } from "./Constants";

export class StopLight {

    // variables
    private stage:createjs.StageGL;
    private _train:Train
    private trainWidth:number;

    private onSprite:createjs.Sprite;
    private offSprite:createjs.Sprite;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, train:Train) {
        this.stage = stage;
        this._train = train;
        this.trainWidth = this._train.sprite.getBounds().width;

        this.onSprite = assetManager.getSprite("sprites", "Lights/Go", 0, 0);
        this.offSprite = assetManager.getSprite("sprites", "Lights/Stop", 0, 0);
    }

    public SwitchStates():void {

        if (this._train.sprite.x > - 500 && this._train.sprite.x < STAGE_WIDTH + this.trainWidth) {
            this.stage.addChildAt(this.offSprite, 10, 315);
            this.stage.removeChild(this.onSprite);
        }
        else {
            this.stage.addChildAt(this.onSprite, 10, 315);
            this.stage.removeChild(this.offSprite);
        }
    }
}