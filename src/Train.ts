import { AssetManager } from "./AssetManager";
import { Chicken } from "./Chicken";
import { STAGE_WIDTH, TRAIN_STARTING_SPEED } from "./Constants";
import { boxHit, randomMe } from "./Toolkit";

export class Train {

    // variables
    private _speed:number;
    private _sprite:createjs.Sprite;
    private width:number;
    private chicken:Chicken;

    private stage:createjs.StageGL;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, chicken:Chicken) {
        this.stage = stage;
        this._speed = TRAIN_STARTING_SPEED;
        this.chicken = chicken;

        this._sprite = assetManager.getSprite("sprites", "Obstacles/Train", 0, 0);
        this.width = this._sprite.getBounds().width;
    }

    // ----------------------------- gets / sets ---------------------------------

    get sprite() {
        return this._sprite;
    }

    get speed() {
        return this._speed;
    }
    set speed(value:number) {
        this._speed = value;
    }

    // --------------------------- public meathods -------------------------------

    public positionMe():void {
        this._sprite.x = randomMe((-1000 - this.width), (STAGE_WIDTH + this.width + 1000));
        this._sprite.y = 305;

        this.stage.addChild(this._sprite);
    }

    public update():void {
        this._sprite.x = this._sprite.x + this._speed;

        if (this._sprite.x > (STAGE_WIDTH + this.width + 2500)) {
            this._sprite.x = (-2500 - this.width);
        }
        if (boxHit(this._sprite, this.chicken.sprite)) {
            this.chicken.killMe();
        }
    }


}