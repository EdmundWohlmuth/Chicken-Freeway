// game constants
export const STAGE_WIDTH:number = 510;
export const STAGE_HEIGHT:number = 600;
export const FRAME_RATE:number = 30;

export const CHICKEN_SPEED:number = 2.5;
export const STARTING_CAR_SPEED:number = 4.75;
export const CAR_SPEED_INCREASE:number = 0.5;

export const CHICKEN_START_Y:number = 575;
export const CHICKEN_START_X:number = 250;

export const LEVEL_GEN_START:number = 480;
export const LANE_THREE_Y:number = 288;

export const ASSET_MANIFEST:Object[] = [
    {
        type:"json",
        src:"./lib/spritesheets/sprites.json",
        id:"sprites",
        data:0
    },
    {
        type:"image",
        src:"./lib/spritesheets/sprites.png",
        id:"sprites",
        data:0
    },
    {
        type:"json",
        src:"./lib/spritesheets/glyphs.json",
        id:"glyphs",
        data:0
    },
    {
        type:"image",
        src:"./lib/spritesheets/glyphs.png",
        id:"glyphs",
        data:0
    },
    {
        type:"sound",
        src:"./lib/sounds/beep.ogg",
        id:"beep",
        data:4
    }     
];