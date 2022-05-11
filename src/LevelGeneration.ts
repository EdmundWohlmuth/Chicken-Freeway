import { AssetManager } from "./AssetManager";
import { randomMe } from "./Toolkit";
import { Car } from "./Car";
import { SportsCar } from "./SportsCar";
import { PoliceCar } from "./PoliceCar";
import { Sedan } from "./Sedan";
import { Chicken } from "./Chicken";

export class LevelGeneration {

    // variables
    private stage:createjs.StageGL;
    private assetManager:AssetManager;
    private car:Car;
    private carArray:Car[] = [];
    private yValue:number = 96

    // game objects
    private sportsCar:SportsCar;
    private police:PoliceCar;
    private sedan:Sedan;
    private chicken:Chicken;
 
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


    constructor(stage:createjs.StageGL, assetManager:AssetManager, chicken:Chicken, sportsCar:SportsCar, police:PoliceCar, sedan:Sedan) {
        this.stage = stage;
        this.chicken = chicken;
        this.sportsCar = sportsCar;
        this.police = police;
        this.sedan = sedan;
        this.assetManager = assetManager;

        // construct containers
        // Level 1
        // streets
        this.levelOne = new createjs.Container;
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
        // cars
        for (let i = 0; i < 9; i++) {      
            if(randomMe(1, 4) == 1){           
                this.carArray.push(this.sportsCar = new SportsCar(this.stage, this.assetManager, this.chicken, this.yValue));
                this.sportsCar.positionMe();
                this.levelOne.addChild(this.sportsCar.sprite);
                }
                else if(randomMe(1, 4) == 2) {
                    this.carArray.push(this.sedan = new Sedan(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sedan.positionMe();
                    this.levelOne.addChild(this.sedan.sprite);
                }
                else {
                    this.carArray.push(this.police = new PoliceCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.police.positionMe();
                    this.levelOne.addChild(this.police.sprite);
                }
                    
                if (this.yValue == 158) this.yValue = 261;
                this.yValue = this.yValue + 31; 
                } // end of array  

        // Level 2
        // streets

        // cars

        // Level 3
        // streets

        // cars

    }

    // --------------------------- gets / sets ---------------------------------



    // ------------------------- public meathods -------------------------------
    public genLevels():void {
        this.clearLevel();
       // let levelType:number = randomMe(1, 4);
       let levelType:number = 1; // TEMP
       this.yValue = 96;

       if (levelType == 1) {
        this.stage.addChildAt(this.levelOne, 0);         
        }
        else if (levelType == 2) {

        }
        else if (levelType == 3) {

        }
        // update car speed
        for (let i = 0; i < this.carArray.length; i++) {
        this.carArray[i].speed = this.carArray[i].speed + 0.25;
        }
        console.log("level " + levelType);
        console.log("Speed: " + this.carArray[1].speed); 
    }

    public update():void {
        // car array update
        for (let car of this.carArray) {
            car.update();
        }     
    }

    public clearLevel():void {
        this.stage.removeChild(this.levelOne);
        this.stage.removeChild(this.levelTwo);
        this.stage.removeChild(this.levelThree);
    }



}