// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST, STARTING_CAR_SPEED } from "./Constants";
import { AssetManager } from "./AssetManager";
import { Chicken } from "./Chicken";
import { SportsCar } from "./SportsCar";
import { Nest } from "./Nest";
import { Sedan } from "./Sedan";
import { PoliceCar } from "./PoliceCar";
import { UserInterface } from "./UserInterface";
import { ScreenManager } from "./ScreenManager";
import { LevelGeneration } from "./LevelGeneration";
import { Car } from "./Car";

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
let car:Car;

// managers
let screenManager:ScreenManager;
let levelGeneration:LevelGeneration;

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

    // construct game objects here
    chicken = new Chicken(stage, assetManager);
    userInterface = new UserInterface(stage, assetManager);
    levelGeneration = new LevelGeneration(stage, assetManager, chicken, sportsCar, police, sedan);

    screenManager = new ScreenManager(stage, assetManager, levelGeneration);
    screenManager.showMainMenu();


    // listen for custom events
    stage.on("nestReached", onGameEvent);
    stage.on("lifeDecrement", onGameEvent);
    stage.on("newLevel", onGameEvent);
    stage.on("gameReset", onGameEvent);

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
                // update score
                levelsCleared++;
                userInterface.clears = levelsCleared;
                // gen new level
                levelGeneration.genLevels();
                // console logs
                console.log ("levelsClears: " + levelsCleared);             
                break;
            case "lifeDecrement":
                lives--
                userInterface.life = lives;
                console.log("Lives: " + lives);
                if (lives < 1) {
                    screenManager.showGameOver();
                    console.log("Game over");
                } 
                break;
            case "lifeIncriment":           

                break;
            case "gameReset":
                userInterface.resetMe();
                chicken.stageClear();
                lives = 3;
                console.log("reset succsessfully");
                console.log("Lives: " + lives);
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
    levelGeneration.update();
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
    else if (e.key == "d" ) rightKey = true;
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