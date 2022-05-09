import { AssetManager } from "./AssetManager";
import { STARTING_CAR_SPEED, STAGE_HEIGHT, STAGE_WIDTH } from "./Constants";
import { Car } from "./Car";
import { Chicken } from "./Chicken";
import { boxHit, randomMe } from "./Toolkit";

export class PoliceCar extends Car {
  
    private chicken:Chicken;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, chicken:Chicken, YCoord:number) {
        super(stage, assetManager, "Police/Left", "Police/Right");

        this.chicken = chicken;

        this.sprite.y = YCoord;
    }
    
    public update(): void {
        super.update();
        
        // collision
        if (boxHit(this._sprite, this.chicken.sprite)) {
           // console.log("collision");
            this.chicken.killMe();
        }
    }
}