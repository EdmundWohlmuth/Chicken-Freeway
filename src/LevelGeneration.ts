import { AssetManager } from "./AssetManager";
import { randomMe } from "./Toolkit";
import { Car } from "./Car";
import { SportsCar } from "./SportsCar";

export class LevelGeneration {

    // variables
    private stage:createjs.StageGL;
    private carArray:Car[] = [];

    // lanes
    private startLane:createjs.Sprite;
    private laneOne:createjs.Sprite;
    private laneTwo:createjs.Sprite;
    private laneThree:createjs.Sprite;
    private laneFour:createjs.Sprite;
    private laneFive:createjs.Sprite;
    private laneSix:createjs.Sprite;

    // containers
    private levelOne:createjs.Container;
    private levelTwo:createjs.Container;
    private levelThree:createjs.Container;


    constructor(stage:createjs.StageGL, assetManager:AssetManager, car:Car, sportsCar:SportsCar) {
        this.stage = stage;

        // construct containers
        // Level 1
        // streets
        this.startLane = assetManager.getSprite("sprites", "Land Tiles/Dirt_M", 0, 576)
        this.levelOne.addChild(this.startLane);
        this.laneOne = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 480)
        this.levelOne.addChild(this.laneOne);
        this.laneTwo = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 384)
        this.levelOne.addChild(this.laneTwo);
        this.laneThree = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 288)
        this.levelOne.addChild(this.laneThree);
        this.laneFour = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 192);
        this.levelOne.addChild(this.laneFour);
        this.laneFive = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 96);
        this.levelOne.addChild(this.laneFive);
        this.laneSix = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 0) // inceriments of 96
        this.levelOne.addChild(this.laneSix);
        // cars Fix Wednesday
        // for (let i = 0; i < 9; i++) {      
        //     if(randomMe(1, 4) == 1){           
        //         carArray.push(sportsCar = new SportsCar(stage, assetManager, chicken, yValue));
        //         sportsCar.positionMe();
        //     }
        //     else if(randomMe(1, 4) == 2) {
        //         carArray.push(sedan = new Sedan(stage, assetManager, chicken, yValue));
        //         sedan.positionMe();
        //     }
        //     else {
        //         carArray.push(police = new PoliceCar(stage, assetManager, chicken, yValue));
        //         police.positionMe();
        //     }
    
        //     if (yValue == 158) yValue = 261;
        //     yValue = yValue + 31; 

        // Level 2
        // streets

        // cars

        // Level 3
        // streets

        // cars

    }

    // ------------------------- public meathods -------------------------------
    public genLevels():void {
       // let levelType:number = randomMe(1, 4);
       let levelType:number = 1; // TEMP

        if (levelType == 1) {
            this.stage.addChildAt(this.levelOne, 0);
        }
        else if (levelType == 2) {

        }
        else if (levelType == 3) {

        }
    }

    public update():void {
        // car array update
    }

    public clearLevel():void {
        this.stage.removeChild(this.levelOne);
        this.stage.removeChild(this.levelTwo);
        this.stage.removeChild(this.levelThree);
    }



}