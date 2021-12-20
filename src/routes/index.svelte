<script context='module' lang='ts'>
  import type { PokeType } from '../types';
</script>

<script lang='ts'>
  import { pokemon } from '../stores/pokestore';
  import Card from '../components/card.svelte';

  let searchTerm = '';
  let filteredPokemon = [];

  $: {
    if (searchTerm) {
      filteredPokemon = $pokemon.filter(
        (mon) => mon.name.toLowerCase().includes(
          searchTerm.toLowerCase()
        )
      );
    } else {
      filteredPokemon = [...$pokemon];
    }
  }
</script>

<svelte:head>
  <title>SvelteKit Pokedex</title>
</svelte:head>

<h1 class='text-4xl text-center my-8 uppercase'>SvelteKit Pokedex</h1>

<input
  class='w-full rounded-md text-lg p-4 border-2 border-gray-200'
  type='text'
  bind:value={searchTerm}
  placeholder='Search Pokemon'
/>

<div class='py-4 grid gap-4 md:grid-cols-2 grid-cols-1'>
  {#each filteredPokemon as mon}
    <Card mon={mon} />
  {/each}
</div>

