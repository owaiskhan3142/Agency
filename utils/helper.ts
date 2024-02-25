import {
    // AUTH_KEY,
    REFERENCE_HEIGHT,
    REFERENCE_WIDTH,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
} from "./constants";

export const wp = (pixels: number) => {
    const v = Math.floor((pixels * SCREEN_WIDTH) / REFERENCE_WIDTH);
    return v;
};

export const hp = (pixels: number) => {
    const v = Math.floor((pixels * SCREEN_HEIGHT) / REFERENCE_HEIGHT);
    return v;
};