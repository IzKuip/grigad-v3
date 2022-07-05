import { updateBuffSizes } from "./buff";
import { logEvent } from "./log";

export interface Dims {
  w: number;
  h: number;
}

export const tileSize = 50;
export const gridSize: Dims = { w: 0, h: 0 };

export function initDisplay() {
  logEvent("initDisplay: initializing display");

  gridSize.w = Math.floor(window.innerWidth / tileSize);
  gridSize.h = Math.floor(window.innerHeight / tileSize);

  updateBuffSizes();
}
