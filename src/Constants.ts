// game constants
export const STAGE_WIDTH:number = 256;
export const STAGE_HEIGHT:number = 600;
export const FRAME_RATE:number = 30;

export const CHICKEN_SPEED:number = 3;
export const STARTING_CAR_SPEED:number = 5;

export const CHICKEN_START_Y:number = 575;
export const CHICKEN_START_X:number = 125;

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
        type:"sound",
        src:"./lib/sounds/beep.ogg",
        id:"beep",
        data:4
    }     
];