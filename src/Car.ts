import { AssetManager } from "./AssetManager";
import { Chicken } from "./Chicken";
import { STARTING_CAR_SPEED, STAGE_HEIGHT, STAGE_WIDTH } from "./Constants";
import { boxHit } from "./Toolkit";

export class Car {

    // states
    public static RIGHT:number = 0;
    public static LEFT:number = 1;

    // variables
    private _speed:number;
    private _sprite:createjs.Sprite;
    private _direction:number;

    private chicken:Chicken;

    private stage:createjs.StageGL;
    private width:number;

    // event handlers

    // constructor
    constructor(stage:createjs.StageGL, assetManager:AssetManager, chicken:Chicken) {
        // init
        this._speed = STARTING_CAR_SPEED;
        this.stage = stage;
        this._direction = Car.RIGHT;

        this.chicken = chicken;

        //sprite
        this._sprite = assetManager.getSprite("sprites", "Car/Left", 250, 294);
        this.width = this._sprite.getBounds().width;       
    }

    
    // ---------------------- gets / sets ------------------------------

    get sprite() {
        return this._sprite;
    }

    // --------------------- event handlers ----------------------------

    // --------------------- public meathods ---------------------------

    public positionMe() {        
        if (this._direction = Car.LEFT) {          
            this._sprite.gotoAndPlay("Car/Left");
        }
        else if (this._direction = Car.RIGHT) {
            this._sprite.gotoAndPlay("Car/Right");
        }

        this.stage.addChild(this._sprite);
    }

    public update() {
        if (this._direction = Car.LEFT) {
            this._sprite.x = this._sprite.x - this._speed;
            
            if (this._sprite.x < 0 - this.width) {
                this._sprite.x = (STAGE_WIDTH + this.width);
            }           
        }
        else if (this._direction = Car.RIGHT) {
            this._sprite.x = this._sprite.x + this._speed;

            if (this._sprite.x > (STAGE_WIDTH - this.width)) {
                this._sprite.x = 0;
            }
        }

        // collision
        if (boxHit(this._sprite, this.chicken.sprite)) {
            console.log("collision");
        }
    }

    // --------------------- private meathods --------------------------
}