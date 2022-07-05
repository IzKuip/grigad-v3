import { get, Writable, writable } from "svelte/store";
import { Dims, gridSize } from "./display";
import { logEvent } from "./log";

export type ScreenBuff = string[][];

export interface Buffs {
  [key: string]: Buff;
}

export interface Buff {
  buff: ScreenBuff;
  size: Dims;
}

export const Buffers: Writable<Buffs> = writable<Buffs>({
  base: {
    buff: [],
    size: { w: 0, h: 0 },
  },
  player: {
    buff: [],
    size: { w: 0, h: 0 },
  },
  entity: {
    buff: [],
    size: { w: 0, h: 0 },
  },
  projectile: {
    buff: [],
    size: { w: 0, h: 0 },
  },
});

export function updateBuffSizes() {
  logEvent("updateBuffSizes");

  const buffs = get(Buffers);

  for (const key in buffs) {
    logEvent(`updating buff size for ${key}`, 1);

    buffs[key].size.w = gridSize.w;
    buffs[key].size.h = gridSize.h;

    for (let y = 0; y < gridSize.h; y++) {
      buffs[key].buff[y] = [];

      for (let x = 0; x < gridSize.w; x++) {
        buffs[key].buff[y][x] = null;
      }
    }
  }

  logEvent(`updated buff sizes`);
}

export function fillBuff(buff: string, c: string) {
  logEvent(`fillBuff: filling ${buff} with ${c}`);

  const buffs = get(Buffers);

  for (let y = 0; y < buffs[buff].size.h; y++) {
    for (let x = 0; x < buffs[buff].size.w; x++) {
      buffs[buff].buff[y][x] = c;
    }
  }

  logEvent(`fillBuff: filled ${buff} with ${c}`);
}
