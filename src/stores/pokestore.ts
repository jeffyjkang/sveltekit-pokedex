import type { PokeType } from '../types';
import { writable } from 'svelte/store';

export const pokemon = writable<PokeType[]>([]);

const fetchPokemon = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const res = await fetch(url);
  const data = await res.json();
  const loadedPokemon = data.results.map((data: {name: string, url: string}, index: number) => {
    return {
      id: index + 1,
      name: data.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
    }
  })
  pokemon.set(loadedPokemon);
}
fetchPokemon();

