import { get, writable } from "svelte/store";
import dayjs from "dayjs";

export type LogType = {
  time: string;
  message: string;
}[];

export const Log = writable<LogType>([]);

export function logEvent(m: string, indentation: number = 0) {
  const ts = dayjs().format("DD-MM-YYYY HH:mm:ss.SSS");

  Log.set([...get(Log), { time: ts, message: m }]);

  console.log(`[${ts}] ${m.padStart(m.length + indentation * 4, " ")}`);
}
