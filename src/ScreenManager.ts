import { AssetManager } from "./AssetManager";
import { LevelGeneration } from "./LevelGeneration";

export class ScreenManager {

    // private vars
    private stage:createjs.StageGL;
    private levelGen:LevelGeneration
    private startButton:createjs.Sprite;
    private restartButton:createjs.Sprite;

    // containers
    private MainMenu:createjs.Container;
    private GameScreen:createjs.Container;
    private GameOver:createjs.Container;

    // events
    private startPressd:createjs.Event;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, levelgen:LevelGeneration) {
        this.stage = stage;
        this.levelGen = levelgen

        // Containers
        // main menu
        this.MainMenu = new createjs.Container();
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/Pause_Overlay", 0, 0));
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/Pause_Overlay", 0, 512));
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/Instructions", 125, 140));
        this.startButton = assetManager.getSprite("sprites", "Button/Start", 220, 400);
        this.MainMenu.addChild(this.startButton);
        // game over
        this.GameOver = new createjs.Container();
        this.GameOver.addChild(assetManager.getSprite("sprites", "UI/Pause_Overlay", 0, 0));
        this.GameOver.addChild(assetManager.getSprite("sprites",  "Win-Lose/Lose_Game_Overlay", 170, 240));
        this.restartButton = assetManager.getSprite("sprites", "Button/Restart", 200, 400);
        this.GameOver.addChild(this.restartButton);

    }

    // -------------------------- public meathods ----------------------------------
    public showMainMenu():void {
        // show mainMenu
        this.hideAll();
        this.stage.addChildAt(this.MainMenu, 0);

        // detect click
        this.startButton.on("click", (e) => {  
            console.log("start pressed");
            this.hideAll();
            this.levelGen.genLevels();
        }, this, true);

    }

    public showGameOver():void { // not showing do this later
        // show gameOver
        this.hideAll();
        this.stage.addChildAt(this.GameOver, 0);

        // detcted pressed restart
        this.restartButton.on("click", (e) => {
            this.hideAll();
            this.showMainMenu();       
        }, this, true);

    }

    // ------------------------ private methods -----------------------
    private hideAll():void {
        this.levelGen.clearLevel();
        this.stage.removeChild(this.MainMenu);
        this.stage.removeChild(this.GameOver);
    }
    
}