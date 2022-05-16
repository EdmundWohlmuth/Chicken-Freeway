import { AssetManager } from "./AssetManager";
import { Chicken } from "./Chicken";
import { Obstacle } from "./Obstacle";
import { boxHit } from "./Toolkit";
import { CHICKEN_SPEED } from "./Constants";

export class NormalRock extends Obstacle {
    // private vars
    private _chicken:Chicken;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, chicken:Chicken) {
        super(stage, assetManager, "Decor/Rock_M");

        this._chicken = chicken       
    }

    // --------------------------------- public meathods ----------------------------------
    public update():void {
        super.update();

        if (boxHit(this.sprite, this._chicken.sprite)) {

            if (this._chicken.direction == Chicken.UP) {
                this._chicken.sprite.y = this._chicken.sprite.y + CHICKEN_SPEED;
            }
            else if (this._chicken.direction == Chicken.DOWN) {
                this._chicken.sprite.y = this._chicken.sprite.y - CHICKEN_SPEED;
            }
            else if (this._chicken.direction == Chicken.RIGHT) {
                this._chicken.sprite.x = this._chicken.sprite.x - CHICKEN_SPEED;
            }
            else if (this._chicken.direction == Chicken.LEFT) {
                this._chicken.sprite.x = this._chicken.sprite.x + CHICKEN_SPEED;
            }
        }
    }
}