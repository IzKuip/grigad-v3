import { get } from "svelte/store";
import { Buffers } from "./buff";
import { logEvent } from "./log";

export function spawn(buff:string, x:number, y:number,c:string) {
  logEvent(`spawning ${buff} at ${x},${y}`);

  const buffs = get(Buffers);

  buffs[buff].buff[y][x] = c;

  console.log(buffs);
}