import { writable } from "svelte/store";

// store 변수 만들기
export const score = writable(0);
export const round = writable(1);
export const time = writable(60);
export const page = writable('title');

