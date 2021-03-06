// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST, STARTING_CAR_SPEED, COUNTDOWN_TIME } from "./Constants";
import { AssetManager } from "./AssetManager";
import { Chicken } from "./Chicken";
import { SportsCar } from "./SportsCar";
import { Nest } from "./Nest";
import { Sedan } from "./Sedan";
import { PoliceCar } from "./PoliceCar";
import { UserInterface } from "./UserInterface";
import { ScreenManager } from "./ScreenManager";
import { LevelGeneration } from "./LevelGeneration";
import { Corn1Up } from "./Corn1Up";
import { Train } from "./Train"; 
import { CountDown } from "./CountDown";
import { StopLight } from "./StopLight";

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
let corn:Corn1Up;
let train:Train;
let stopLight:StopLight;

// managers
let screenManager:ScreenManager;
let levelGeneration:LevelGeneration;

// UI && Screens
let userInterface:UserInterface;
let countDown:CountDown;
let pointsGained:number = 0;
let timerCount:number = COUNTDOWN_TIME
let lives:number = 3;

function monitorKeys():void {
    if (screenManager.inMenuBool == false){
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
}

// --------------------------------------------------- event handler
function onReady(e:createjs.Event):void {
    console.log(">> spritesheet loaded ??? ready to add sprites to game");

    // construct game objects here
    chicken = new Chicken(stage, assetManager);
    nest = new Nest(stage, assetManager, chicken);
    corn = new Corn1Up(stage, assetManager, chicken);

    levelGeneration = new LevelGeneration(stage, assetManager, chicken, sportsCar, police, sedan, nest, corn, train, stopLight);
    screenManager = new ScreenManager(stage, assetManager, levelGeneration, countDown);
    countDown = new CountDown(stage, assetManager, screenManager);
    userInterface = new UserInterface(stage, assetManager);
    
    screenManager.showMainMenu();

    //start timer
    countDown.start(COUNTDOWN_TIME);
    

    // listen for custom events
    stage.on("nestReached", onGameEvent);
    stage.on("lifeDecrement", onGameEvent);
    stage.on("newLevel", onGameEvent);
    stage.on("gameReset", onGameEvent);
    stage.on("lifeIncriment", onGameEvent);

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
                pointsGained = pointsGained + countDown.seconds;
                userInterface.points = pointsGained;
                // gen new level
                levelGeneration.genLevels();
                corn.new1Up(); 
                countDown.reset();          
                break;
            case "lifeDecrement":
                lives--
                userInterface.life = lives;
                if (lives < 1) {
                    screenManager.showGameOver();
                    corn.hideMe();
                    nest.hideMe();
                    chicken.stageClear();
                }
                if (pointsGained > 15) {
                    pointsGained = pointsGained - 15;
                    userInterface.points = pointsGained;
                }                
                break;
            case "lifeIncriment": 
                if (lives < 3) {
                    lives++;
                    userInterface.life = lives;
                    userInterface.addLivesUI();
                } 
                pointsGained = pointsGained + 25;
                userInterface.points = pointsGained;      
                break;
            case "gameReset":
                pointsGained = 0;
                userInterface.resetMe();
                chicken.stageClear();
                levelGeneration.reset();
                lives = 3;
                levelGeneration.carSpeed = STARTING_CAR_SPEED;
                countDown.reset();            
                console.log("reset succsessfully");
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
    corn.update();

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