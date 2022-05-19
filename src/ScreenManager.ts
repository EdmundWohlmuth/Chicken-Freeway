import { AssetManager } from "./AssetManager";
import { LevelGeneration } from "./LevelGeneration";
import { CountDown } from "./CountDown";
import { COUNTDOWN_TIME } from "./Constants";

export class ScreenManager {

    // private vars
    private stage:createjs.StageGL;
    private levelGen:LevelGeneration
    private startButton:createjs.Sprite;
    private restartButton:createjs.Sprite;
    private instructionsButton:createjs.Sprite;
    private backButton:createjs.Sprite;

    private _countDown:CountDown;

    // containers
    private MainMenu:createjs.Container;
    private GameOver:createjs.Container;
    private HowToPlay:createjs.Container;

    // bool
    private inMenu:Boolean;

    // events
    private gameReset:createjs.Event;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, levelgen:LevelGeneration, countDown:CountDown) {
        this.stage = stage;
        this.levelGen = levelgen

        this._countDown = countDown

        // bool
        this.inMenu = true;

        // Containers
        // main menu
        this.MainMenu = new createjs.Container();
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/Background", 0, 0));
        this.MainMenu.addChild(assetManager.getSprite("sprites", "UI/StartScreen", 100, 110));
        this.startButton = assetManager.getSprite("sprites", "Button/Start", 220, 410);
        this.MainMenu.addChild(this.startButton);
        this.instructionsButton = assetManager.getSprite("sprites", "Button/Instruction", 180, 450);
        this.MainMenu.addChild(this.instructionsButton);
        // game over
        this.GameOver = new createjs.Container();
        this.GameOver.addChild(assetManager.getSprite("sprites", "UI/Background", 0, 0));
        this.GameOver.addChild(assetManager.getSprite("sprites",  "Win-Lose/Lose_Game_Overlay", 170, 240));
        this.restartButton = assetManager.getSprite("sprites", "Button/Restart", 200, 400);
        this.GameOver.addChild(this.restartButton);
        // how to play
        this.HowToPlay = new createjs.Container();
        this.HowToPlay.addChild(assetManager.getSprite("sprites", "UI/Background", 0, 0));
        this.HowToPlay.addChild(assetManager.getSprite("sprites", "UI/Instructions", 100, 110));
        this.backButton = assetManager.getSprite("sprites", "Button/Back", 220, 500);
        this.HowToPlay.addChild(this.backButton);

        // event
        this.gameReset = new createjs.Event("gameReset", true, false);

    }

    // ---------------------------- gets / sets ------------------------------------

    get inMenuBool() {
        return this.inMenu;
    }

    // -------------------------- public meathods ----------------------------------
    public showMainMenu():void {
        // show mainMenu
        this.hideAll();
        this.stage.addChildAt(this.MainMenu, 0);
        // set bool to true
        this.inMenu = true;

        // detect click
        this.startButton.on("click", (e) => {  
            this.hideAll();
            this.levelGen.genLevels();
            this.inMenu = false;
            this._countDown.start(COUNTDOWN_TIME);      
        }, this, true);

        this.instructionsButton.on("click", (e) => {
            this.hideAll();
            this.showHowToPlay();
            this.inMenu = true;
        }, true, true)

    }

    public showGameOver():void {
        // show gameOver
        this.hideAll();
        this.stage.addChildAt(this.GameOver, 0);
        // set bool to true
        this.inMenu = true;

        // detcted pressed restart
        this.restartButton.on("click", (e) => {
            this.hideAll();
            this.showMainMenu();  
            this.startButton.dispatchEvent(this.gameReset);
            this.inMenu = true;    
        }, this, true);

    }

    public showHowToPlay():void {
        this.hideAll();
        this.stage.addChildAt(this.HowToPlay, 0);
        this.inMenu = true;

        // detect pressed back
        this.backButton.on("click", (e) => {
            this.hideAll();
            this.showMainMenu();  
            this.inMenu = true; 
        }, true, true)
    }

    // ------------------------ private methods -----------------------
    private hideAll():void {
        this.levelGen.clearLevel();
        this.stage.removeChild(this.MainMenu);
        this.stage.removeChild(this.GameOver);
        this.stage.removeChild(this.HowToPlay);
    }
    
}