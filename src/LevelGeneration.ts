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
import { Obstacle } from "./Obstacle";
import { LargeRock } from "./LargeRock";
import { NormalRock } from "./NormalRock";
import { Tree } from "./Tree";
import { Bush } from "./Bush";
import { Train } from "./Train";
import { StopLight } from "./StopLight";

export class LevelGeneration {

    // variables
    private stage:createjs.StageGL;
    private assetManager:AssetManager;
    private carArray:Car[] = [];
    private obstacleArray:Obstacle[] = [];
    private yValue:number = 96
    private carSpeedBonus:number = 5;
    private levelType:number;

    // game objects
    private sportsCar:SportsCar;
    private police:PoliceCar;
    private sedan:Sedan;
    private chicken:Chicken;
    private nest:Nest;
    private corn:Corn1Up;
    private largeRock:LargeRock
    private normalRock:NormalRock
    private tree:Tree;
    private bush:Bush;
    private train:Train;
    private stopLight:StopLight;
 
    // lanes
    private startLane:createjs.Sprite;
    private laneOne:createjs.Sprite;
    private laneTwo:createjs.Sprite;
    private laneThree:createjs.Sprite;
    private laneFour:createjs.Sprite;
    private laneFive:createjs.Sprite;
    private laneSix:createjs.Sprite;
    private trainTrack:createjs.Sprite;

    // containers
    private levelOne:createjs.Container;
    private levelTwo:createjs.Container;
    private levelThree:createjs.Container;
    private levelFour:createjs.Container;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, chicken:Chicken, sportsCar:SportsCar, police:PoliceCar, sedan:Sedan, nest:Nest, corn:Corn1Up, train:Train, stopLight:StopLight) {
        this.stage = stage;
        this.chicken = chicken;
        this.sportsCar = sportsCar;
        this.police = police;
        this.sedan = sedan;
        this.nest = nest;
        this.corn = corn;
        this.train = train;
        this.stopLight = stopLight;
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
        this.startLane = assetManager.getSprite("sprites", "Land Tiles/Dirt_M", 0, 576)
        this.levelTwo.addChild(this.startLane);
        this.laneOne = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 480)
        this.levelTwo.addChild(this.laneOne);
        this.laneTwo = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 384)
        this.levelTwo.addChild(this.laneTwo);
        this.laneThree = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 288)
        this.levelTwo.addChild(this.laneThree);
        this.laneFour = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 192);
        this.levelTwo.addChild(this.laneFour);
        this.laneFive = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 96);
        this.levelTwo.addChild(this.laneFive);
        this.laneSix = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 0) // inceriments of 96
        this.levelTwo.addChild(this.laneSix);       

        // Level 3
        this.levelThree = new createjs.Container;
        // streets
        this.startLane = assetManager.getSprite("sprites", "Land Tiles/Dirt_M", 0, 576)
        this.levelThree.addChild(this.startLane);
        this.laneOne = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 480)
        this.levelThree.addChild(this.laneOne);
        this.laneTwo = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 384)
        this.levelThree.addChild(this.laneTwo);
        this.laneThree = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 288)
        this.levelThree.addChild(this.laneThree);
        this.laneFour = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 192);
        this.levelThree.addChild(this.laneFour);
        this.laneFive = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 96);
        this.levelThree.addChild(this.laneFive);
        this.laneSix = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 0) // inceriments of 96
        this.levelThree.addChild(this.laneSix); 

        // level 4
        this.levelFour = new createjs.Container;
        // streets
        this.startLane = assetManager.getSprite("sprites", "Land Tiles/Dirt_M", 0, 576);
        this.levelFour.addChild(this.startLane);
        this.laneOne = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 480);
        this.levelFour.addChild(this.laneOne);
        this.laneTwo = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 384);
        this.levelFour.addChild(this.laneTwo);
        this.laneThree = assetManager.getSprite("sprites", "Land Tiles/Dirt_LG", 0, 288);
        this.levelFour.addChild(this.laneThree);
        this.trainTrack = assetManager.getSprite("sprites", "Land Tiles/Tracks", 0, 305);
        this.levelFour.addChild(this.trainTrack);
        this.laneFour = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 192);
        this.levelFour.addChild(this.laneFour);
        this.laneFive = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 96);
        this.levelFour.addChild(this.laneFive);
        this.laneSix = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 0) // inceriments of 96
        this.levelFour.addChild(this.laneSix);  
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
        this.levelType = randomMe(1, 4);    

       if (this.levelType == 1) {
        this.stage.addChildAt(this.levelOne, 0); 
        this.yValue = 96;  
        // gen cars
        for (let i = 0; i < 9; i++) { 
            let carType:number = randomMe(1, 3);     
            if(carType == 1){           
                this.carArray.push(this.sportsCar = new SportsCar(this.stage, this.assetManager, this.chicken, this.yValue));
                this.sportsCar.positionMe();
                this.sportsCar.speed = this.carSpeed + 0.5;
                this.levelOne.addChild(this.sportsCar.sprite);
                }
                else if(carType == 2) {
                    this.carArray.push(this.sedan = new Sedan(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sedan.positionMe();
                    this.sedan.speed = this.carSpeed - 0.5;
                    this.levelOne.addChild(this.sedan.sprite);
                }
                else {
                    this.carArray.push(this.police = new PoliceCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.police.positionMe();
                    this.police.speed = this.carSpeed + 0.5;
                    this.levelOne.addChild(this.police.sprite);
                }
                    
                if (this.yValue == 158) this.yValue = 261;
                this.yValue = this.yValue + 31; 
                } // end of array 
                
            // gen obstacles
            for (let i = 0; i < 20; i++) {
                let obstacleType:number = randomMe(1,4);
                let newYPos:number = randomMe(1,2);
                if (newYPos == 1) this.yValue = randomMe(480, 510);
                else if (newYPos == 2) this.yValue = randomMe(192, 220);

                if (obstacleType == 1) {
                    this.obstacleArray.push(this.largeRock = new LargeRock(this.stage, this.assetManager, this.chicken));
                    this.largeRock.positionMe(this.yValue);
                    this.levelOne.addChild(this.largeRock.sprite);
                }
                else if (obstacleType == 2) {
                    this.obstacleArray.push(this.normalRock = new NormalRock(this.stage, this.assetManager, this.chicken));
                    this.normalRock.positionMe(this.yValue);
                    this.levelOne.addChild(this.normalRock.sprite);
                }
                else if (obstacleType == 3) {
                    this.obstacleArray.push(this.tree = new Tree(this.stage, this.assetManager, this.chicken));
                    this.tree.positionMe(this.yValue);
                    this.levelOne.addChild(this.tree.sprite);
                }
                else if (obstacleType == 4) {
                    this.obstacleArray.push(this.bush = new Bush(this.stage, this.assetManager, this.chicken));
                    this.bush.positionMe(this.yValue);
                    this.levelOne.addChild(this.bush.sprite);
                }                              
            }
            
        }
        else if (this.levelType == 2) {
            this.stage.addChildAt(this.levelTwo, 0); 
            this.yValue = 96;  
            // gen cars
            for (let i = 0; i < 9; i++) { 
                let carType:number = randomMe(1, 3);     
                if(carType == 1){           
                    this.carArray.push(this.sportsCar = new SportsCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sportsCar.positionMe();
                    this.sportsCar.speed = this.carSpeed + 0.5;
                    this.levelTwo.addChild(this.sportsCar.sprite);
                    }
                    else if(carType == 2) {
                        this.carArray.push(this.sedan = new Sedan(this.stage, this.assetManager, this.chicken, this.yValue));
                        this.sedan.positionMe();
                        this.sedan.speed = this.carSpeed - 0.5;
                        this.levelTwo.addChild(this.sedan.sprite);
                    }
                    else {
                        this.carArray.push(this.police = new PoliceCar(this.stage, this.assetManager, this.chicken, this.yValue));
                        this.police.positionMe();
                        this.police.speed = this.carSpeed + 0.5;
                        this.levelTwo.addChild(this.police.sprite);
                    }
                        
                    if (this.yValue == 158) this.yValue = 257;
                    else if ( this.yValue == 350) this.yValue = 449;
                    this.yValue = this.yValue + 31; 
                    } // end of array 

                                // gen obstacles
            for (let i = 0; i < 20; i++) {
                let obstacleType:number = randomMe(1,4);
                let newYPos:number = randomMe(1,2);
                if (newYPos == 1) this.yValue = randomMe(384, 430);
                else if (newYPos == 2) this.yValue = randomMe(192, 220);

                if (obstacleType == 1) {
                    this.obstacleArray.push(this.largeRock = new LargeRock(this.stage, this.assetManager, this.chicken));
                    this.largeRock.positionMe(this.yValue);
                    this.levelTwo.addChild(this.largeRock.sprite);
                }
                else if (obstacleType == 2) {
                    this.obstacleArray.push(this.normalRock = new NormalRock(this.stage, this.assetManager, this.chicken));
                    this.normalRock.positionMe(this.yValue);
                    this.levelTwo.addChild(this.normalRock.sprite);
                }
                else if (obstacleType == 3) {
                    this.obstacleArray.push(this.tree = new Tree(this.stage, this.assetManager, this.chicken));
                    this.tree.positionMe(this.yValue);
                    this.levelTwo.addChild(this.tree.sprite);
                }
                else if (obstacleType == 4) {
                    this.obstacleArray.push(this.bush = new Bush(this.stage, this.assetManager, this.chicken));
                    this.bush.positionMe(this.yValue);
                    this.levelTwo.addChild(this.bush.sprite);
                }                            
            }                  

        }
        else if (this.levelType == 3) {
            this.stage.addChildAt(this.levelThree, 0);
            this.yValue = 192;
            // gen cars
            for (let i = 0; i < 9; i++) { 
                let carType:number = randomMe(1, 3);     
                if(carType == 1){           
                    this.carArray.push(this.sportsCar = new SportsCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sportsCar.positionMe();
                    this.sportsCar.speed = this.carSpeed + 0.5;
                    this.levelThree.addChild(this.sportsCar.sprite);
                    }
                    else if(carType == 2) {
                        this.carArray.push(this.sedan = new Sedan(this.stage, this.assetManager, this.chicken, this.yValue));
                        this.sedan.positionMe();
                        this.sedan.speed = this.carSpeed - 0.5;
                        this.levelThree.addChild(this.sedan.sprite);
                    }
                    else {
                        this.carArray.push(this.police = new PoliceCar(this.stage, this.assetManager, this.chicken, this.yValue));
                        this.police.positionMe();
                        this.police.speed = this.carSpeed + 0.5;
                        this.levelThree.addChild(this.police.sprite);
                    }
                    this.yValue = this.yValue + 31;
            } // end of array 
            // gen obstacles
            for (let i = 0; i < 20; i++) {
                let obstacleType:number = randomMe(1,4);
                let newYPos:number = randomMe(1,2);
                if (newYPos == 1) this.yValue = randomMe(96, 120);
                else if (newYPos == 2) this.yValue = randomMe(490, 520);

                if (obstacleType == 1) {
                    this.obstacleArray.push(this.largeRock = new LargeRock(this.stage, this.assetManager, this.chicken));
                    this.largeRock.positionMe(this.yValue);
                    this.levelThree.addChild(this.largeRock.sprite);
                }
                else if (obstacleType == 2) {
                    this.obstacleArray.push(this.normalRock = new NormalRock(this.stage, this.assetManager, this.chicken));
                    this.normalRock.positionMe(this.yValue);
                    this.levelThree.addChild(this.normalRock.sprite);
                }
                else if (obstacleType == 3) {
                    this.obstacleArray.push(this.tree = new Tree(this.stage, this.assetManager, this.chicken));
                    this.tree.positionMe(this.yValue);
                    this.levelThree.addChild(this.tree.sprite);
                }
                else if (obstacleType == 4) {
                    this.obstacleArray.push(this.bush = new Bush(this.stage, this.assetManager, this.chicken));
                    this.bush.positionMe(this.yValue);
                    this.levelThree.addChild(this.bush.sprite);
                }                            
            }                    
        }
        else if (this.levelType == 4) {
            this.stage.addChildAt(this.levelFour, 0);
            this.yValue = 96;

            // gen cars
            for (let i = 0; i < 9; i++) { 
                let carType:number = randomMe(1, 3);     
                if(carType == 1){           
                    this.carArray.push(this.sportsCar = new SportsCar(this.stage, this.assetManager, this.chicken, this.yValue));
                    this.sportsCar.positionMe();
                    this.sportsCar.speed = this.carSpeed + 0.5;
                    this.levelFour.addChild(this.sportsCar.sprite);
                    }
                    else if(carType == 2) {
                        this.carArray.push(this.sedan = new Sedan(this.stage, this.assetManager, this.chicken, this.yValue));
                        this.sedan.positionMe();
                        this.sedan.speed = this.carSpeed - 0.5;
                        this.levelFour.addChild(this.sedan.sprite);
                    }
                    else {
                        this.carArray.push(this.police = new PoliceCar(this.stage, this.assetManager, this.chicken, this.yValue));
                        this.police.positionMe();
                        this.police.speed = this.carSpeed + 0.5;
                        this.levelFour.addChild(this.police.sprite);
                    }
                        
                    if (this.yValue == 158) this.yValue = 354;
                    else if (this.yValue == 447) this.yValue = 800;
                    this.yValue = this.yValue + 31; 
                    } // end of array 

            // gen obstacles
            for (let i = 0; i < 20; i++) {
                let obstacleType:number = randomMe(1,4);
                let newYPos:number = randomMe(1,2);
                if (newYPos == 1) this.yValue = randomMe(480, 510);
                else if (newYPos == 2) this.yValue = randomMe(192, 220);
                                
                if (obstacleType == 1) {
                    this.obstacleArray.push(this.largeRock = new LargeRock(this.stage, this.assetManager, this.chicken));
                    this.largeRock.positionMe(this.yValue);
                    this.levelFour.addChild(this.largeRock.sprite);
                    }
                else if (obstacleType == 2) {
                    this.obstacleArray.push(this.normalRock = new NormalRock(this.stage, this.assetManager, this.chicken));
                    this.normalRock.positionMe(this.yValue);
                    this.levelFour.addChild(this.normalRock.sprite);
                }
                else if (obstacleType == 3) {
                    this.obstacleArray.push(this.tree = new Tree(this.stage, this.assetManager, this.chicken));
                    this.tree.positionMe(this.yValue);
                    this.levelFour.addChild(this.tree.sprite);
                }
                else if (obstacleType == 4) {
                    this.obstacleArray.push(this.bush = new Bush(this.stage, this.assetManager, this.chicken));
                    this.bush.positionMe(this.yValue);
                    this.levelFour.addChild(this.bush.sprite);
                }                            
            }
            this.train = new Train(this.stage, this.assetManager, this.chicken);
            this.train.positionMe();
            this.levelFour.addChild(this.train.sprite);

            this.stopLight = new StopLight(this.stage, this.assetManager, this.train);
            this.levelFour.addChild(this.stopLight.sprite);

        }      
        // place nest
        this.nest.positiionMe();
        this.corn.positionMe();
        
    }

    public update():void {
        // car array update
        for (let car of this.carArray) {
            car.update();
        }  
        for (let obstacle of this.obstacleArray) {
            obstacle.update();
        } 
        if (this.levelType == 4) {
            this.train.update();
            this.stopLight.SwitchStates();
        } 
    }

    public clearLevel():void {
        // resets levels and car array 
        // update car speed
        for (let i = 0; i < this.carArray.length; i++) {
            this.carArray[i].speed = this.carSpeedBonus + CAR_SPEED_INCREASE;
            // console.log("level " + this.levelType);
            console.log("Speed: " + this.carArray[1].speed); 
            }

        this.stage.removeChild(this.levelOne);
        this.stage.removeChild(this.levelTwo);
        this.stage.removeChild(this.levelThree);
        this.stage.removeChild(this.levelFour);
        for (let i = 0; i < this.carArray.length; i++) {
            this.carSpeedBonus = this.carArray[1].speed;
            this.levelOne.removeChild(this.carArray[i].sprite);
            this.levelTwo.removeChild(this.carArray[i].sprite);
            this.levelThree.removeChild(this.carArray[i].sprite);
            this.levelFour.removeChild(this.carArray[i].sprite);                  
        }
        for (let i = 0; i < this.obstacleArray.length; i++) {
            this.levelOne.removeChild(this.obstacleArray[i].sprite);
            this.levelTwo.removeChild(this.obstacleArray[i].sprite);
            this.levelThree.removeChild(this.obstacleArray[i].sprite);
            this.levelFour.removeChild(this.obstacleArray[i].sprite);
        }
        if (this.levelType == 4) {
            this.levelFour.removeChild(this.train.sprite);
            this.levelFour.removeChild(this.stopLight.sprite);
        } 
        this.carArray = []; 
        this.obstacleArray = [];    
    }

    public reset():void {
        // reset car's speed
        for (let i = 0; i < this.carArray.length; i++) {
            this.carArray[i].speed = STARTING_CAR_SPEED;
        }
        console.log("Level Rest");
    }



}