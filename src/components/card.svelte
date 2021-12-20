<script lang='ts'>
  import type { PokeType } from '../types';
  import { fade } from 'svelte/transition';
  export let mon: PokeType;
</script>

<a
  class='p-6 bg-gray-100 text-gray-800 text-center
  rounded-md shadow-sm hover:shadow-md flex flex-col items-center'
  href={`/pokemon/${mon.id}`}
  transition:fade    
>
  <img class='h-40 w-40' src={mon.image} alt={mon.name} />
  <h2 class='text-2xl uppercase'>{mon.id}. {mon.name}</h2>
</a>

