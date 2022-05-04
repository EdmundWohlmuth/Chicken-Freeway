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

let startLane:createjs.Sprite;
let laneOne:createjs.Sprite;
let laneTwo:createjs.Sprite;
let laneThree:createjs.Sprite;
let laneFour:createjs.Sprite;
let laneFive:createjs.Sprite;
let laneSix:createjs.Sprite;


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
    startLane = assetManager.getSprite("sprites", "Land Tiles/Dirt_M", 0, 576)
    stage.addChild(startLane);
    laneOne = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 480)
    stage.addChild(laneOne);
    laneTwo = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 384)
    stage.addChild(laneTwo);
    laneThree = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 288)
    stage.addChild(laneThree);
    laneFour = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 192);
    stage.addChild(laneFour);
    laneFive = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 96);
    stage.addChild(laneFive);
    laneSix = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 0) // inceriments of 96
    stage.addChild(laneSix);

    // construct game objects here
    chicken = new Chicken(stage, assetManager);

    sportsCar = new SportsCar(stage, assetManager, chicken);
    sportsCar.positionMe();

    sedan = new Sedan(stage, assetManager, chicken);
    sedan.positionMe();

    police = new PoliceCar(stage, assetManager, chicken);
    police.positionMe();

    nest = new Nest(stage, assetManager, chicken);

     // event listeners
     document.onkeydown = onKeyDown;
     document.onkeyup = onKeyUp;

    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);        
    console.log(">> game ready");    
}

function onTick(e:createjs.Event) {
    // console.log("TICK!");
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // game loop
    monitorKeys();
    chicken.update();
    sportsCar.update();
    sedan.update();
    police.update();
    nest.update();
   // console.log(chicken.state); 

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