// src/lib/stores.ts
import { writable } from 'svelte/store';

interface Favorite {
  userId: string;
  characterId: number;
}

export const favorites = writable<Favorite[]>([]);
