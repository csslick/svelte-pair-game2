import { writable } from "svelte/store";

export const score = writable(0);
export const round = writable(1);
export const time = writable(100);
export const page = writable('title');