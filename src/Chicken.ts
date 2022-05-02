import { AssetManager } from "./AssetManager";
import { CHICKEN_SPEED, STAGE_HEIGHT, STAGE_WIDTH, CHICKEN_START_Y, CHICKEN_START_X } from "./Constants";
import { boxHit } from "./Toolkit";

export class Chicken {

    // states
    public static UP:number = 0;
    public static RIGHT:number = 1;
    public static LEFT:number = 2;
    public static DOWN:number = 3;

    public static STATE_IDLE:number = 0;
    public static STATE_MOVING:number = 1;
    public static STATE_DEAD:number = 3;

    // variables
    private _speed:number;
    private _sprite:createjs.Sprite;
    private _state:number;
    private _direction:number;

    private stage:createjs.StageGL;
    private width:number;

    // event dispatching

    // constructor
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        // init
        this._speed = CHICKEN_SPEED;
        this._state = Chicken.STATE_IDLE;
        this.stage = stage;
        this._direction = Chicken.UP;

        //sprite
        this._sprite = assetManager.getSprite("sprites", "Chicken/Up", CHICKEN_START_X, CHICKEN_START_Y);
        this.width = this._sprite.getBounds().width;

        stage.addChild(this._sprite);
    }  

    // ------------------------ gets / sets -------------------------------



    // ----------------------- event handlers -----------------------------


    // ----------------------- public meathods ----------------------------

    public startMe():void {
        if (this._state == Chicken.STATE_IDLE) {
            this._state = Chicken.STATE_MOVING;
        }
    }
    public stopMe():void {
        if (this._state == Chicken.STATE_MOVING) {
            this._state = Chicken.STATE_IDLE;
        }
    }

    public update():void {
        if (this._state == Chicken.STATE_MOVING) {
            let sprite:createjs.Sprite = this._sprite;

            if (this._direction == Chicken.LEFT) {

                sprite.x = sprite.x - this._speed;
                if (sprite.x < 60) {
                    sprite.x = 60;
                }
            } else if (this._direction == Chicken.RIGHT) {
                sprite.x = sprite.x + this._speed;
                if (sprite.x > (STAGE_WIDTH - this.width)) {
                    sprite.x = (STAGE_WIDTH - this.width);
                }
            }
        }
    }

    // ---------------------- private meathods ----------------------------
}