import { AssetManager } from "./AssetManager";
import { STARTING_CAR_SPEED, STAGE_HEIGHT, STAGE_WIDTH } from "./Constants";
import { randomMe } from "./Toolkit";

export class Car {

    // states
    protected static RIGHT:number = 0;
    protected static LEFT:number = 1;

    // variables
    protected _speed:number;
    protected _sprite:createjs.Sprite;
    protected _direction:number;

    protected _animationLeft:string;
    protected _animationRight:string;

    protected stage:createjs.StageGL;
    protected width:number;

    // event handlers

    // constructor
    constructor(stage:createjs.StageGL, assetManager:AssetManager, animationLeft:string, animationRight:string) {
        // init
        this._speed = STARTING_CAR_SPEED;
        this.stage = stage;

        this._animationLeft = animationLeft;
        this._animationRight = animationRight;

        //sprite
        this._sprite = assetManager.getSprite("sprites", animationLeft, 0, 0);
        this.width = this._sprite.getBounds().width;       
    }

    
    // ---------------------- gets / sets ------------------------------

    get sprite() {
        return this._sprite;     
    }

    get speed():number {
        return this._speed;
    }
    set speed(value:number) {
        this._speed = value;
    }

    // --------------------- public meathods ---------------------------

    public positionMe() {        // placement using lists, ex: leftPositions(2), rightPositions(4), randNum(1, 10)
               
        if(randomMe(1, 3) == 1) this._direction = Car.LEFT
        else this._direction = Car.RIGHT;

        if (this._direction == Car.LEFT) {          
            this._sprite.gotoAndPlay(this._animationLeft);
            this.sprite.x = randomMe((STAGE_WIDTH / 2), STAGE_WIDTH);
        }
        else {
            this._sprite.gotoAndPlay(this._animationRight);
            this.sprite.x = randomMe(0, (STAGE_WIDTH / 2));
        }

        this.stage.addChild(this._sprite);
    }

    public update() {
        if (this._direction == Car.LEFT) {
            this._sprite.x = this._sprite.x - this._speed;
            
            if (this._sprite.x < 0 - this.width) {
                this._sprite.x = (STAGE_WIDTH + this.width);
            }           
        }
        else if (this._direction == Car.RIGHT) {
            this._sprite.x = this._sprite.x + this._speed;

            if (this._sprite.x > (STAGE_WIDTH + this.width)) {
                this._sprite.x = (0 - this.width);
            }
        }
    }

    // --------------------- private meathods --------------------------
}