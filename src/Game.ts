// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST } from "./Constants";
import { AssetManager } from "./AssetManager";
import { Chicken } from "./Chicken";
import { Car } from "./Car";
import { SportsCar } from "./SportsCar";
import { Nest } from "./Nest";
import { Sedan } from "./Sedan";
import { PoliceCar } from "./PoliceCar";
import { randomMe } from "./Toolkit";
import { UserInterface } from "./UserInterface";
import { ScreenManager } from "./ScreenManager";
import { LevelGeneration } from "./LevelGeneration";

// game variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;
let assetManager:AssetManager;

// key presses
let leftKey:boolean = false;
let rightKey:boolean = false;
let upKey:boolean = false;
let downKey:boolean = false;

// sprites
let chicken:Chicken;
let sportsCar:SportsCar;
let sedan:Sedan;
let police:PoliceCar;
let nest:Nest;

// managers
let screenManager:ScreenManager;
let levelGeneration:LevelGeneration;

// Array
let carArray:Car[] = [];
let yValue:number = 96

// UI && Screens
let userInterface:UserInterface;
let levelsCleared:number = 0;
let lives:number = 3;

function monitorKeys():void {
    if (upKey) {
        chicken.direction = Chicken.UP;
       // console.log("up");
        chicken.startMe();

    } else if (downKey) {
        chicken.direction = Chicken.DOWN;
       // console.log("down");
        chicken.startMe();

    } else if (leftKey) {
        chicken.direction = Chicken.LEFT;
       // console.log("left");
        chicken.startMe();
        
    } else if (rightKey) {
        chicken.direction = Chicken.RIGHT;
       // console.log("right");
        chicken.startMe();
        
    } else chicken.stopMe();
}

// --------------------------------------------------- event handler
function onReady(e:createjs.Event):void {
    console.log(">> spritesheet loaded – ready to add sprites to game");

    // temp map creation

    // construct game objects here
    chicken = new Chicken(stage, assetManager);

    userInterface = new UserInterface(stage, assetManager);

    for (let i = 0; i < 9; i++) {      
        if(randomMe(1, 4) == 1){           
            carArray.push(sportsCar = new SportsCar(stage, assetManager, chicken, yValue));
            sportsCar.positionMe();
        }
        else if(randomMe(1, 4) == 2) {
            carArray.push(sedan = new Sedan(stage, assetManager, chicken, yValue));
            sedan.positionMe();
        }
        else {
            carArray.push(police = new PoliceCar(stage, assetManager, chicken, yValue));
            police.positionMe();
        }

        if (yValue == 158) yValue = 261;
        yValue = yValue + 31;
    } 

    screenManager = new ScreenManager(stage, assetManager);
    screenManager.showMainMenu();


    // listen for custom events
    stage.on("nestReached", onGameEvent);
    stage.on("lifeDecrement", onGameEvent);

    nest = new Nest(stage, assetManager, chicken);

     // event listeners
     document.onkeydown = onKeyDown;
     document.onkeyup = onKeyUp;

    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);        
    console.log(">> game ready"); 
    
    function onGameEvent(e:createjs.Event):void {
        switch (e.type) {
            case "nestReached":
                for (let i = 0; i < carArray.length; i++) {
                    carArray[i].speed = carArray[i].speed + 0.25;
                }
                levelsCleared++;
                userInterface.clears = levelsCleared;
                console.log ("levelsClears: " + levelsCleared);
                console.log("Speed: " + carArray[1].speed);
                break;
            case "lifeDecrement":
                lives--
                userInterface.life = lives;
                console.log("Lives: " + lives);
                break;
            case "newLevel":
                break;
        
            default:
                break;
        }
    }
}

function onTick(e:createjs.Event) {
    // console.log("TICK!");
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // game loop
    monitorKeys();
    chicken.update();  
    for (let car of carArray) {
        car.update();
    }
    nest.update();
    userInterface.update();

    // update the stage
    stage.update();   
}

// key press events
function onKeyDown(e:KeyboardEvent):void {
    if (e.key == "w") upKey = true;
    else if (e.key == "s") downKey = true;
    else if (e.key == "a") leftKey = true;
    else if (e.key == "d") rightKey = true;
}
function onKeyUp(e:KeyboardEvent): void {
    if (e.key == "w") upKey = false;
    else if (e.key == "s") downKey = false;
    else if (e.key == "a") leftKey = false;
    else if (e.key == "d") rightKey = false;

    chicken.stopMe(); 
    chicken.runOnce = true;  
}

// --------------------------------------------------- main method
function main():void {
    // get reference to canvas
    canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    // set canvas width and height - this will be the stage size
    canvas.width = STAGE_WIDTH;
    canvas.height = STAGE_HEIGHT;    

    // create stage object
    stage = new createjs.StageGL(canvas, { antialias: true });

    // AssetManager setup
    assetManager = new AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    // load the assets
    assetManager.loadAssets(ASSET_MANIFEST);
}

main();