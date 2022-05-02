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

    get sprite() {
        return this._sprite;
    }

    get speed() {
        return this._speed;
    }
    set speed(value:number) {
        this._speed = value;
    }

    set direction(value:number) {
        this._direction = value;
    }
    get direction() {
        return this._direction;
    }

    get state() {
        return this._state;
    } 
    set state(value:number) {
        this._state = value;
    } 

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

    public killMe():void {

    }

    // determine direction and speed based off: this._direction
    public update():void {
        if (this._state == Chicken.STATE_MOVING) {
            let sprite:createjs.Sprite = this._sprite;

            if (this._direction == Chicken.LEFT) {
                sprite.x = sprite.x - this._speed;
                this.sprite.gotoAndPlay("Chicken/Left"); // this needs a fix, keeps playing frame 1

                if (sprite.x < 0) {
                    sprite.x = 0;
                }

            } 
            else if (this._direction == Chicken.RIGHT) {
                sprite.x = sprite.x + this._speed;
                this.sprite.gotoAndPlay("Chicken/Right");

                if (sprite.x > (STAGE_WIDTH - this.width)) {
                    sprite.x = (STAGE_WIDTH - this.width);
                }

            } 
            else if (this._direction == Chicken.UP) {
                sprite.y = sprite.y - this._speed;
                this.sprite.gotoAndPlay("Chicken/Up");

                if (sprite.y < 0) {
                    sprite.y = 0;
                }
            } 
            else if (this._direction == Chicken.DOWN) {
                sprite.y = sprite.y + this._speed;
                this.sprite.gotoAndPlay("Chicken/Down");

                if (sprite.y > (STAGE_HEIGHT - this.width)) {
                    sprite.y = (STAGE_HEIGHT - this.width);
                }
            }
        }
    }

    // ---------------------- private meathods ----------------------------
}