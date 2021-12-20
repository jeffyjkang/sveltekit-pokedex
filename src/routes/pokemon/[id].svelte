<script context='module' lang='ts'>
  export async function load({page}) {
    const id = page.params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const mon = await res.json();
    return {
      props: {mon}
    }
  }
</script>

<script lang='ts'>
  export let mon;
</script>

<div class='flex flex-col items-center'>
  <h1 class='text-4xl text-center my-8 uppercase'>
    {mon.name}
  </h1>
  <p>
    Type: <strong>{mon.types[0].type.name}</strong> |
    Height: <strong>{mon.height}</strong> |
    Weight: <strong>{mon.weight}</strong>
  </p>
  <img class='card-image' src={mon.sprites['front_default']} alt={mon.name} />
</div>

