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
    private _deadSprite:createjs.Sprite;
    private _state:number;
    private _direction:number;

    public runOnce:Boolean;

    private stage:createjs.StageGL;
    private width:number;

    // events
    private lifeDecrement:createjs.Event;

    // constructor
    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        // init
        this._speed = CHICKEN_SPEED;
        this._state = Chicken.STATE_IDLE;
        this.stage = stage;
        this._direction = Chicken.UP;
        this.lifeDecrement = new createjs.Event("lifeDecrement", true, false);
        this.runOnce = true;

        //sprite
        this._sprite = assetManager.getSprite("sprites", "Chicken/Up", CHICKEN_START_X, CHICKEN_START_Y);       
        this.width = this._sprite.getBounds().width;
        this._deadSprite = assetManager.getSprite("sprites", "Chicken/Dead");

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
            this._sprite.stop();
        }
    }

    public killMe():void {
        let sprite:createjs.Sprite = this._sprite;
        this._state = Chicken.STATE_DEAD;
        // decerement life
        this._sprite.dispatchEvent(this.lifeDecrement);

        // create cooked chicken
        this._deadSprite.x = sprite.x;
        this._deadSprite.y = sprite.y;
        this.stage.addChild(this._deadSprite);
        
        // reset player pos
        sprite.x = CHICKEN_START_X;
        sprite.y = CHICKEN_START_Y;
        this._state = Chicken.STATE_IDLE;
    }

    // determine direction and speed based off: this._direction
    public update():void {
        if (this._state == Chicken.STATE_MOVING && this._state != Chicken.STATE_DEAD) {
            let sprite:createjs.Sprite = this._sprite;

            if (this._direction == Chicken.LEFT) {
                sprite.x = sprite.x - this._speed;

                if (this.runOnce) {
                    this.sprite.gotoAndPlay("Chicken/Left"); // this needs a fix, keeps playing frame 1
                    this.runOnce = false;
                }
                
                if (sprite.x < 0) {
                    sprite.x = 0;
                }

            } 
            else if (this._direction == Chicken.RIGHT) {
                sprite.x = sprite.x + this._speed;

                if (this.runOnce) {
                    this.sprite.gotoAndPlay("Chicken/Right");
                    this.runOnce = false;
                }               

                if (sprite.x > (STAGE_WIDTH - this.width)) {
                    sprite.x = (STAGE_WIDTH - this.width);
                }

            } 
            else if (this._direction == Chicken.UP) {
                sprite.y = sprite.y - this._speed;

                if (this.runOnce) {
                    this.sprite.gotoAndPlay("Chicken/Up");
                    this.runOnce = false;
                }             

                if (sprite.y < 0) {
                    sprite.y = 0;
                }
            } 
            else if (this._direction == Chicken.DOWN) {
                sprite.y = sprite.y + this._speed;

                if (this.runOnce) {
                    this.sprite.gotoAndPlay("Chicken/Down");
                    this.runOnce = false;
                }              

                if (sprite.y > (STAGE_HEIGHT - this.width)) {
                    sprite.y = (STAGE_HEIGHT - this.width);
                }
            }
        }
    }

    public stageClear():void {
        let sprite:createjs.Sprite = this._sprite;
        // reset player
        sprite.x = CHICKEN_START_X;
        sprite.y = CHICKEN_START_Y;
        
    }

    // ---------------------- private meathods ----------------------------
}