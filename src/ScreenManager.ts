import { AssetManager } from "./AssetManager";
import { LevelGeneration } from "./LevelGeneration";

export class ScreenManager {

    private stage:createjs.StageGL;
    private levelGen:LevelGeneration
    private startButton:createjs.Sprite;
    private restartButton:createjs.Sprite;

    private MainMenu:createjs.Container;
    private GameScreen:createjs.Container;
    private GameOver:createjs.Container;

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
        // this.GameOver.addChild(assetManager.getSprite("sprites", "UI/Pause_Overlay", 0, 0));
        // this.GameOver.addChild(assetManager.getSprite("sprites",  "Win-Lose/Lose_Game_Overlay", 125, 140));
        // this.restartButton = assetManager.getSprite("sprites", "Button/Restart", 220, 400);
        // this.GameOver.addChild(this.restartButton);
        // game screen
        // diffrent in my case, needs some work

    }

    // -------------------------- public meathods ----------------------------------
    public showMainMenu():void {
        // show mainMenu
        this.hideAll();
        this.stage.addChildAt(this.MainMenu, 0);

        // detect click
        this.startButton.on("click", (e) => {
            console.log("button pressed");
            this.hideAll();
            this.levelGen.genLevels();
        }, this, true);

    }

    public showGame():void {
        // show game

    }

    public showGameOver():void {
        // show gameOver
        this.hideAll();
        this.stage.addChildAt(this.GameOver, 0);

        // detcted pressed restart
        this.restartButton.on("click", (e) => {
            // event nonsense
        }, this, true);

    }

    // ------------------------ private methods -----------------------
    private hideAll():void {
        this.stage.removeChild(this.MainMenu);
        this.stage.removeChild(this.GameOver);
    }
    
}