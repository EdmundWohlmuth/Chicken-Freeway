import { AssetManager } from "./AssetManager";
import { randomMe } from "./Toolkit";
import { Car } from "./Car";
import { SportsCar } from "./SportsCar";
import { PoliceCar } from "./PoliceCar";
import { Sedan } from "./Sedan";
import { Chicken } from "./Chicken";
import { STARTING_CAR_SPEED, CAR_SPEED_INCREASE } from "./Constants";
import { Nest } from "./Nest";
import { Corn1Up } from "./Corn1Up"; 

export class LevelGeneration {

    // variables
    private stage:createjs.StageGL;
    private assetManager:AssetManager;
    private carArray:Car[] = [];
    private yValue:number = 96
    private carSpeedBonus:number = 5;

    // game objects
    private sportsCar:SportsCar;
    private police:PoliceCar;
    private sedan:Sedan;
    private chicken:Chicken;
    private nest:Nest;
    private corn:Corn1Up;
 
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

    constructor(stage:createjs.StageGL, assetManager:AssetManager, chicken:Chicken, sportsCar:SportsCar, police:PoliceCar, sedan:Sedan, nest:Nest, corn:Corn1Up) {
        this.stage = stage;
        this.chicken = chicken;
        this.sportsCar = sportsCar;
        this.police = police;
        this.sedan = sedan;
        this.nest = nest;
        this.corn = corn;
        this.assetManager = assetManager;

        // construct containers
        // Level 1
        this.levelOne = new createjs.Container;
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

        // Level 2
        this.levelTwo = new createjs.Container;
        // streets
              

        // Level 3
        this.levelThree = new createjs.Container;
        // streets

    }

    get carSpeed() {
        return this.carSpeedBonus;
    }
    set carSpeed(value:number) {
        this.carSpeedBonus = value;
    }

    // ------------------------- public meathods -------------------------------
    public genLevels():void {
        this.clearLevel();
       // let levelType:number = randomMe(1, 4);
       let levelType:number = 1; // TEMP     

       if (levelType == 1) {
        this.stage.addChildAt(this.levelOne, 0); 
        this.yValue = 96;  
        // gen cars
        for (let i = 0; i < 9; i++) { 
            let carType:number = randomMe(1, 3);     
            if(carType == 1){           
                this.carArray.push(this.sportsCar = new SportsCar(this.stage, this.assetManager, this.chicken, this.yValue));
                this.sportsCar.positionMe();
                this.levelOne.addChild(this.sportsCar.sprite);
                }
                else if(carType == 2) {
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
        }
        else if (levelType == 2) {

        }
        else if (levelType == 3) {

        }
        // update car speed
        for (let i = 0; i < this.carArray.length; i++) {
        this.carArray[i].speed = this.carSpeedBonus + CAR_SPEED_INCREASE;
        }
        console.log("level " + levelType);
        console.log("Speed: " + this.carArray[1].speed);
        
        // place nest
        this.nest.positiionMe();
        this.corn.positionMe();
        
    }

    public update():void {
        // car array update
        for (let car of this.carArray) {
            car.update();
        }     
    }

    public clearLevel():void {
        // resets levels and car array      
        this.stage.removeChild(this.levelOne);
        this.stage.removeChild(this.levelTwo);
        this.stage.removeChild(this.levelThree);
        for (let i = 0; i < this.carArray.length; i++) {
            this.carSpeedBonus = this.carArray[1].speed;
            this.levelOne.removeChild(this.carArray[i].sprite);
            this.levelTwo.removeChild(this.carArray[i].sprite);
            this.levelThree.removeChild(this.carArray[i].sprite);
        }
        this.carArray = [];     
    }

    public reset():void {
        // reset car's speed
        for (let i = 0; i < this.carArray.length; i++) {
            this.carArray[i].speed = STARTING_CAR_SPEED;
        }
        console.log("Level Rest");
    }



}