import { writable } from "svelte/store";

export type Movement = "up" | "down" | "left" | "right" | "none";

export const MoveDirection = writable<Movement>("none");

export function kbEvent(e:KeyboardEvent) {
    if (e.key === "ArrowUp") {
        MoveDirection.set("up");
    } else if (e.key === "ArrowDown") {
        MoveDirection.set("down");
    } else if (e.key === "ArrowLeft") {
        MoveDirection.set("left");
    } else if (e.key === "ArrowRight") {
        MoveDirection.set("right");
    } else {
        MoveDirection.set("none");
    }
}
