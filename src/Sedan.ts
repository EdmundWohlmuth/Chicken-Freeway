import { AssetManager } from "./AssetManager";
import { STARTING_CAR_SPEED, STAGE_HEIGHT, STAGE_WIDTH } from "./Constants";
import { Car } from "./Car";
import { Chicken } from "./Chicken";
import { boxHit, randomMe } from "./Toolkit";

export class Sedan extends Car {
  
    private chicken:Chicken;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, chicken:Chicken) {
        super(stage, assetManager, "Sedan/Left", "Sedan/Right");

        this.chicken = chicken;

        this.sprite.y = 325; //TEMP
    }
    
    public update(): void {
        super.update();
        
        // collision
        if (boxHit(this._sprite, this.chicken.sprite)) {
            console.log("collision");
            this.chicken.killMe();
        }
    }
}