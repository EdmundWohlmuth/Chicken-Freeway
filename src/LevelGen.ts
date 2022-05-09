import { AssetManager } from "./AssetManager";
import { LEVEL_GEN_START } from "./Constants";

export class LevelGen {

    private _laneOne:createjs.Sprite;
    private _laneTwo:createjs.Sprite;
    private _laneThree:createjs.Sprite;
    private _laneFour:createjs.Sprite;
    private _laneFive:createjs.Sprite;
    private _laneSix:createjs.Sprite;

    constructor(stage:createjs.StageGL, assetManager:AssetManager) {
        
        // construct level (Will eventually choose from three possibilities || random gen a level)
        this._laneOne = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 480)
        stage.addChild(this._laneOne);
        this._laneTwo = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 384)
        stage.addChild(this._laneTwo);
        this._laneThree = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 288)
        stage.addChild(this._laneThree);
        this._laneFour = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 192);
        stage.addChild(this._laneFour);
        this._laneFive = assetManager.getSprite("sprites", "Land Tiles/Road_3_Lane", 0, 96);
        stage.addChild(this._laneFive);
        this._laneSix = assetManager.getSprite("sprites", "Land Tiles/Grass_LG", 0, 0) // inceriments of 96
        stage.addChild(this._laneSix);


    }
}